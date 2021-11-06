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

  // fetch all sells from db
  const getAllSells = async () => {
    const res = await fetch('http://localhost:8000/api/sells');
    const sells = await res.json();
    setSellList(sells.data);
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
  const editSellById = async (id) => {};
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
      }}
    >
      {children}
    </SellsContext.Provider>
  );
};

export default SellsContextProvider;
