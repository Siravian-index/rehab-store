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
        <span className='font-bold'>id:</span>
        {item.id}
      </div>
      <button className='mx-1 bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded'>
        Delete
      </button>
      <button className='mx-1 bg-gray-500 hover:bg-gray-700 text-white text-center py-2 px-4 rounded'>
        Edit
      </button>
      <button className='mx-1 bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded'>
        Save
      </button>
    </li>
  );
};

export default SingleSell;
