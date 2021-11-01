const NewSell = () => {
  return (
    <div>
      <form action=''>
        <label htmlFor='seller'>
          <input id='seller' type='text' />
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
      </form>
    </div>
  );
};

export default NewSell;
