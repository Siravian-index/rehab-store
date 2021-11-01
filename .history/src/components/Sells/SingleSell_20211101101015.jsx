const SingleSell = ({ item }) => {
  return (
    <li>
      <div>Seller: {item.sellerName}</div>
      <div>Client: {item.clientName} </div>
      <div>Client ID: {item.clientID} </div>
      <div>ProductName: {item.produtName} </div>
      <div>id: {item.id} </div>
    </li>
  );
};

export default SingleSell;

// {
//   sellerName: 'Juan Lopez',
//   clientName: 'Marcos Aguilar',
//   clientID: 843233834,
//   productName: 'Bananas',
//   productPrice: 15,
//   id: 1,
// },
