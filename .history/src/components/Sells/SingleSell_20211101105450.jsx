const SingleSell = ({ item }) => {
  return (
    <li className='text-left my-5'>
      <div>
        <span>Seller</span>: {item.sellerName}
      </div>
      <div>
        <span>Client</span>: {item.clientName}{' '}
      </div>
      <div>
        <span>Client ID</span>: {item.clientID}{' '}
      </div>
      <div>
        <span>ProductName</span> {item.productName}{' '}
      </div>
      <div>
        <span>id:</span>
        {item.id}{' '}
      </div>
    </li>
  );
};

export default SingleSell;
