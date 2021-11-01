import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const NewSell = () => {
  const [newSoldProduct, setNewSoldProduct] = useState({
    sellerName: '',
    clientName: '',
    clientID: '',
    productName: '',
    productPrice: '',
    id: uuidv4(),
  });

  const addNewSell = () => {
    setNewSoldProduct({ ...newSoldProduct });
  };
  return (
    <div>
      <form
        action=''
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className='flex flex-col justify-center items-center gap-5'
      >
        <label htmlFor='seller'>
          <input id='seller' type='text' placeholder='Seller Name' />
        </label>
        <label htmlFor='client'>
          <input id='client' type='text' placeholder='Client Name' />
        </label>
        <label htmlFor='client'>
          <input id='client' type='text' placeholder='Client ID' />
        </label>
        <label htmlFor='productName'>
          <input id='productName' type='text' placeholder='Product Name' />
        </label>
        <label htmlFor='productPrice'>
          <input id='productPrice' type='text' placeholder='Product Price' />
        </label>
        <button
          className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NewSell;
