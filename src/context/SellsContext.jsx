import { createContext, useState, useEffect } from 'react';

export const SellsContext = createContext(null);

const SellsContextProvider = ({ children }) => {
  const [sellList, setSellList] = useState([]);
  const [newSell, setNewSell] = useState({
    clientName: '',
    clientID: '',
    totalValue: '',
    sellerName: '',
    products: [
      {
        productName: '',
        productPrice: '',
        productAmount: '',
      },
    ],
  });

  const [updatedSell, setUpdatedSell] = useState({
    clientName: '',
    clientID: '',
    totalValue: '',
    sellerName: '',
    _id: '',
    products: [
      {
        productName: '',
        productPrice: '',
        productAmount: '',
      },
    ],
  });
  // fetch all sells from db
  const getAllSells = async () => {
    const res = await fetch('http://localhost:8000/api/sells');
    const sells = await res.json();
    setSellList(sells.data);
  };
  // get one sell by id
  const getOneSellById = async (_id) => {
    const res = await fetch(`http://localhost:8000/api/sell/${_id}`);
    const sell = await res.json();
    setUpdatedSell(sell.data);
  };

  // place all the products in state
  useEffect(() => {
    getAllSells();
  }, []);
  // create product
  const createSell = async (newSellObj) => {
    await fetch('http://localhost:8000/api/sell', {
      method: 'POST',
      body: JSON.stringify(newSellObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    getAllSells();
  };
  // remove product
  const removeSellById = (_id) => {
    fetch(`http://localhost:8000/api/sell/${_id}`, {
      method: 'DELETE',
    });
    setSellList((prev) => prev.filter((obj) => obj._id !== _id));
  };

  // edit product
  const editSellById = async (updatedObj) => {
    await fetch(`http://localhost:8000/api/sell/`, {
      method: 'PUT',
      body: JSON.stringify(updatedObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    getAllSells();
  };

  // -------------------------------------
  // newSell Logic
  const [formValues, setFormValues] = useState([
    { product: '', productAmount: '' },
  ]);
  // clearForm
  const clearForm = () => {
    setFormValues([{ product: '', productAmount: '' }]);
    setNewSell({
      clientName: '',
      clientID: '',
      totalValue: '',
      sellerName: '',
      products: [
        {
          productName: '',
          productPrice: '',
          productAmount: '',
        },
      ],
    });
  };
  const delimiter = ':>>';
  const [total, setTotal] = useState('');
  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    setFormValues([...formValues, { product: '', productAmount: '' }]);
  };

  const removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const getTotal = (arr) => {
    return arr.reduce((prev, obj) => {
      let [product, price] = obj.product.split(delimiter);
      if (product && price) {
        return prev + Number(price) * Number(obj.productAmount);
      }
      return prev;
    }, 0);
  };
  // this functions is to set the obj state in the NewSell File
  // DO NOT confuse it with the similar function to set the obj state
  // on the EditSell
  const updateNewSellState = async (sellerName, arr) => {
    let products = arr.reduce((prev, obj) => {
      let [product, price] = obj.product.split(delimiter);
      if (product && price) {
        prev.push({
          productName: product,
          productPrice: price,
          productAmount: obj.productAmount,
        });
      }
      return prev;
    }, []);
    await setNewSell({
      ...newSell,
      totalValue: total,
      sellerName: sellerName,
      products: products,
    });
  };

  const updateSetUpdatedSell = async (sellerName, arr) => {
    let products = arr.reduce((prev, obj) => {
      let [product, price] = obj.product.split(delimiter);
      if (product && price) {
        prev.push({
          productName: product,
          productPrice: price,
          productAmount: obj.productAmount,
        });
      }
      return prev;
    }, []);
    setUpdatedSell({
      ...updatedSell,
      totalValue: total,
      sellerName: sellerName,
      products: products,
    });
  };
  return (
    <SellsContext.Provider
      value={{
        removeSellById,
        editSellById,
        newSell,
        setNewSell,
        sellList,
        setSellList,
        createSell,
        updatedSell,
        setUpdatedSell,
        getOneSellById,
        clearForm,
        formValues,
        setFormValues,
        delimiter,
        handleChange,
        total,
        setTotal,
        addFormFields,
        removeFormFields,
        getTotal,
        updateNewSellState,
        updateSetUpdatedSell,
      }}
    >
      {children}
    </SellsContext.Provider>
  );
};

export default SellsContextProvider;
