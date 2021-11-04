import { useState } from 'react';
import NewSell from './NewSell';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from './SearchBar';

const Sells = () => {
  const [action, setAction] = useState('');
  const [newSoldProduct, setNewSoldProduct] = useState({
    sellerName: '',
    clientName: '',
    clientID: '',
    productName: '',
    productPrice: '',
    id: uuidv4(),
  });
  const [sellData, setSellData] = useState([
    {
      sellerName: 'Juan Lopez',
      clientName: 'Marcos Aguilar',
      clientID: '843233834',
      productName: 'Bananas',
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

      {action === 'add' && (
        <NewSell
          newSoldProduct={newSoldProduct}
          setNewSoldProduct={setNewSoldProduct}
          setSellData={setSellData}
          sellData={sellData}
        />
      )}
      {action === 'list' && (
        <SearchBar sellData={sellData} setSellData={setSellData} />
      )}
    </div>
  );
};

export default Sells;
