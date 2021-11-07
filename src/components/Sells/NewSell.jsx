import { useContext, useState, useEffect } from 'react';
import { SellsContext } from '../../context/SellsContext';
import { ProductsContext } from '../../context/ProductsContext';
import { useAuth0 } from '@auth0/auth0-react';

const NewSell = () => {
  const delimiter = ':>>';
  const [total, setTotal] = useState('');
  const [formValues, setFormValues] = useState([
    { product: '', productAmount: '' },
  ]);
  // context
  const { newSell, setNewSell, createSell } = useContext(SellsContext);
  const { products } = useContext(ProductsContext);
  // oauth
  const { user } = useAuth0();
  // useEffect
  useEffect(() => {
    setTotal(getTotal(formValues));
  }, [formValues]);

  useEffect(() => {
    updateNewSellState(user.name, formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, formValues, user.name]);
  // helper functions
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

  return (
    <div>
      <form
        action='POST'
        onSubmit={(event) => {
          event.preventDefault();
          createSell(newSell);
        }}
        className='flex flex-col justify-center items-center gap-5'
      >
        <label htmlFor='client'>
          <input
            required
            id='client'
            type='text'
            placeholder='Client Name'
            value={newSell.clientName}
            onChange={(e) => {
              setNewSell({
                ...newSell,
                clientName: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor='client'>
          <input
            required
            id='client'
            type='number'
            placeholder='Client ID'
            value={newSell.clientID}
            onChange={(e) => {
              setNewSell({
                ...newSell,
                clientID: e.target.value,
              });
            }}
          />
        </label>
        {formValues.map((element, index) => (
          <div className='flex justify-center items-center gap-x-5' key={index}>
            <select
              id='product'
              name='product'
              onChange={(e) => handleChange(index, e)}
            >
              <option defaultValue value='noProduct'>
                Select Product
              </option>
              {products.map((product, index) => (
                <option
                  key={index}
                  value={`${product.productName}${delimiter}${product.productPrice}`}
                >
                  {product.productName}
                </option>
              ))}
            </select>
            <label>
              <input
                type='number'
                min='1'
                max='99'
                name='productAmount'
                placeholder='Amount'
                required
                value={element.productAmount}
                onChange={(e) => handleChange(index, e)}
              />
            </label>
            {index ? (
              <button
                type='button'
                className=' bg-red-200 hover:bg-red-500 hover:text-white text-red-500 text-center py-1 px-1 rounded'
                onClick={() => removeFormFields(index)}
              >
                -
              </button>
            ) : null}
          </div>
        ))}
        <div className='button-section'>
          <button
            className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
            type='button'
            onClick={() => addFormFields()}
          >
            Add
          </button>
        </div>
        <div>
          <p>Total: {total} </p>
        </div>
        <button
          className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
          type='submit'
        >
          Submit
        </button>
      </form>
      <div className='flex justify-center items-center mt-4'>
        <button
          className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
          onClick={() => clearForm()}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default NewSell;
