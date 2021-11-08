import { useContext, useEffect } from 'react';
import { SellsContext } from '../../context/SellsContext';
import { ProductsContext } from '../../context/ProductsContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router';

const EditSell = () => {
  const { products } = useContext(ProductsContext);
  const { user } = useAuth0();
  const { id } = useParams();

  console.log(products);
  const {
    newSell,
    setNewSell,
    formValues,
    clearForm,
    delimiter,
    handleChange,
    total,
    setTotal,
    addFormFields,
    removeFormFields,
    getTotal,
    updatedSell,
    setUpdatedSell,
  } = useContext(SellsContext);
  useEffect(() => {
    setTotal(getTotal(formValues));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);
  return (
    <div>
      <h3 className='text-center my-5'>Edit Sell</h3>
      <h3 className='text-center my-5'>Sell's id: {id}</h3>

      <form
        action='POST'
        onSubmit={(event) => {
          event.preventDefault();
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
              className=' bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
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
                className=' bg-red-200 hover:bg-red-500 hover:text-white text-red-500 text-center py-1 px-2 rounded'
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

export default EditSell;
