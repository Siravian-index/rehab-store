import { useContext, useState } from 'react';
import { SellsContext } from '../../context/SellsContext';
import { ProductsContext } from '../../context/ProductsContext';

const NewSell = () => {
  const [formValues, setFormValues] = useState([
    { productName: '', productAmount: '', productPrice: '' },
  ]);
  // context
  const { newSell, setNewSell } = useContext(SellsContext);
  const { products } = useContext(ProductsContext);
  // console.log(products);
  console.log(newSell);
  return (
    <div>
      <form
        action=''
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
        <button
          className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewSell;

// <div className='border p-4'>
// <label htmlFor='counter'>
//   <input type='number' name='counter' id='counter' min='1' max='99' />
// </label>
// <select name='productsOptions' id='productsOptions'>
//   {products.map((product) => (
//     <option key={product._id} value={product.productName}>
//       {product.productName}
//     </option>
//   ))}
// </select>
// </div>
