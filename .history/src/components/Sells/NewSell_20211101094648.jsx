const NewSell = () => {
  return (
    <div>
      <form action=''>
        <label htmlFor='seller'>
          <input id='seller' type='text' placeholder='Seller Name' />
        </label>
        <label htmlFor='client'>
          <input id='client' type='text' placeholder='Client Name' />
        </label>
        <label htmlFor='client'>
          <input id='client' type='text' placeholder='Client ID' />
        </label>
        <label htmlFor='productName'>
          <input id='productName' type='text' placeholder='Product Name' />
        </label>
        <label htmlFor='productPrice'>
          <input id='productPrice' type='text' placeholder='Product Price' />
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default NewSell;
