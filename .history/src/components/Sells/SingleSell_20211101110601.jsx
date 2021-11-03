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
        <span className='font-bold'>Price:</span> ${item.productPrice}
      </div>
      <div>
        <span className='font-bold'>id:</span>
        {item.id}
      </div>
    </li>
  );
};

export default SingleSell;
