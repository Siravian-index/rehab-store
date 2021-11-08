import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { Link } from 'react-router-dom';

const SingleProduct = ({ item }) => {
  const { removeProductById } = useContext(ProductsContext);

  return (
    <li className='text-left my-5'>
      <div>
        <span className='font-bold'>Product Name:</span> {item.productName}
      </div>
      <div>
        <span className='font-bold'>Product Description:</span>{' '}
        {item.description}
      </div>
      <div>
        <span className='font-bold'>Status:</span> {item.status}
      </div>
      <div>
        <span className='font-bold'>Price:</span> {item.productPrice}
      </div>
      <div>
        <span className='font-bold'>id:</span> {item._id}
      </div>
      <div className='flex items-center justify-center gap-4 mt-4'>
        <button
          className='bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-center py-1 px-2 rounded'
          onClick={() => {
            removeProductById(item._id);
          }}
        >
          Delete
        </button>
        <Link to={`/edit/product/${item._id}`}>
          <button className='bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-1 px-2 rounded'>
            Edit
          </button>
        </Link>
      </div>
    </li>
  );
};

export default SingleProduct;
