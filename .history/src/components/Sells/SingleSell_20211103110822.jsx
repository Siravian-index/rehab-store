import { useState } from 'react';

const SingleSell = ({ item }) => {
  return (
    <li className='text-left my-5'>
      <div>
        <span className='font-bold'>Seller</span>: {item.sellerName}
      </div>
      <div>
        <span className='font-bold'>Client</span>: {item.clientName}
      </div>
      <div>
        <span className='font-bold'>Client ID</span>: {item.clientID}
      </div>
      <div>
        <span className='font-bold'>Product Name</span> {item.productName}
      </div>
      <div>
        <span className='font-bold'>Price:</span> {item.productPrice}
      </div>
      <div>
        <span className='font-bold'>id:</span> {item.id}
      </div>
      <button className='bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-center py-1 px-4 rounded'>
        Delete
      </button>
      <button className='bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-2 px-4 rounded'>
        Edit
      </button>
    </li>
  );
};

export default SingleSell;
