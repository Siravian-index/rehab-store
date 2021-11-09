import { SellsContext } from '../../context/SellsContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const SingleSell = ({ item }) => {
  const { removeSellById } = useContext(SellsContext);

  return (
    <li className='text-left my-5 md:p-4'>
      <div>
        <span className='font-bold'>Seller:</span> {item.sellerName}
      </div>
      <div>
        <span className='font-bold'>Client:</span> {item.clientName}
      </div>
      <div>
        <span className='font-bold'>Client ID:</span> {item.clientID}
      </div>
      <div>
        <span className='font-bold'>Total:</span> {item.totalValue}
      </div>
      <div>
        <span className='font-bold'>Details: </span>
        {item.products.map((product, index) => (
          <div className='ml-4 my-1 pb-1 border-b' key={index}>
            <p className='font-bold'>
              Product:
              <span className='font-normal'>{product.productName}</span>
            </p>
            <p className='font-bold'>
              Price: <span className='font-normal'>{product.productPrice}</span>
            </p>
            <p className='font-bold'>
              Amount:
              <span className='font-normal'>{product.productAmount}</span>
            </p>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center gap-4 mt-4'>
        <button
          className='bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-center py-1 px-2 rounded'
          onClick={() => {
            removeSellById(item._id);
          }}
        >
          Delete
        </button>
        <Link to={`/edit/sell/${item._id}`}>
          <button className='bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-1 px-2 rounded'>
            Edit
          </button>
        </Link>
      </div>
    </li>
  );
};

export default SingleSell;
