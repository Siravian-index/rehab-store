import { useState } from 'react';
import NewProduct from './NewProduct';
import SearchBarProducts from './SearchBarProducts';

const Store = () => {
  const [action, setAction] = useState('');

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 my-5'>
        <h3>What do you need to do?</h3>
        <div className='mb-5'>
          <button
            className='bg-black hover:bg-gray-900 text-white text-center mx-3 py-2 px-4 rounded'
            onClick={() => {
              setAction('add');
            }}
          >
            New Product
          </button>
          <button
            className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
            onClick={() => {
              setAction('list');
            }}
          >
            See List
          </button>
        </div>
      </div>
      {action === 'add' && <NewProduct />}
      {action === 'list' && <SearchBarProducts />}
    </div>
  );
};

export default Store;
