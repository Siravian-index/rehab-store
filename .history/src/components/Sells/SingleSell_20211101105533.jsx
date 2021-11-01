const SingleSell = ({ item }) => {
  return (
    <li className='text-left my-5'>
      <div>
        <span className='text-bold'>Seller</span>: {item.sellerName}
      </div>
      <div>
        <span className='text-bold'>Client</span>: {item.clientName}
      </div>
      <div>
        <span className='text-bold'>Client ID</span>: {item.clientID}
      </div>
      <div>
        <span className='text-bold'>ProductName</span> {item.productName}
      </div>
      <div>
        <span className='text-bold'>id:</span>
        {item.id}
      </div>
    </li>
  );
};

export default SingleSell;
