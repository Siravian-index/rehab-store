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
      <div>ProductName: {item.productName} </div>
      <div>id: {item.id} </div>
    </li>
  );
};

export default SingleSell;
