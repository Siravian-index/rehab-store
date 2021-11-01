const SingleSell = ({ item }) => {
  return (
    <li className='text-center'>
      <div>Seller: {item.sellerName}</div>
      <div>Client: {item.clientName} </div>
      <div>Client ID: {item.clientID} </div>
      <div>ProductName: {item.productName} </div>
      <div>id: {item.id} </div>
    </li>
  );
};

export default SingleSell;
