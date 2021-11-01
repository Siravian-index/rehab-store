import { useState } from 'react';
import ListSells from './ListSells';
import NewSell from './NewSell';

const Sells = () => {
  const [action, setAction] = useState('');
  const [sellData, setSellData] = useState([
    {
      sellerName: 'Juan Lopez',
      clientName: 'Marcos Aguilar',
      clientID: 843233834,
      productName: 'Bananas',
      productPrice: 15,
    },
    {
      sellerName: 'Juan Lopez',
      clientName: 'Marcos Aguilar',
      clientID: 843233834,
      productName: 'Bananas',
      productPrice: 15,
    },
    {
      sellerName: 'Juan Lopez',
      clientName: 'Marcos Aguilar',
      clientID: 843233834,
      productName: 'Bananas',
      productPrice: 15,
    },
  ]);
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 my-5'>
        <h3>What do you need to do?</h3>
        <div>
          <button
            className='bg-black hover:bg-gray-900 text-white text-center mx-3 py-2 px-4 rounded'
            onClick={() => {
              setAction('add');
            }}
          >
            New sell
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

      {action === 'add' && <NewSell />}
      {action === 'list' && <ListSells />}
    </div>
  );
};

export default Sells;
