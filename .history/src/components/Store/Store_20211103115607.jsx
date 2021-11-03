import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewProduct from './NewProduct';
const Store = () => {
  const [action, setAction] = useState('');
  const [newProduct, setNewProduct] = useState({
    productName: '',
    description: '',
    productPrice: '',
    id: uuidv4(),
  });
  const [productData, setProductData] = useState([
    {
      productName: 'Bananas',
      description: 'some yellow bananas',
      productPrice: '15',
      id: uuidv4(),
    },
  ]);

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
      {action === 'add' && (
        <NewProduct
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          productData={productData}
          setProductData={setProductData}
        />
      )}
      {/* {action === 'list' && <ListProducts />} */}
    </div>
  );
};

export default Store;
