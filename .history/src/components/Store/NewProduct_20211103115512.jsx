import { v4 as uuidv4 } from 'uuid';

const NewProduct = ({
  newProduct,
  setNewProduct,
  productData,
  setProductData,
}) => {
  const addNewProduct = () => {};
  const clearForm = () => {};
  return (
    <div>
      <form
        action=''
        onSubmit={(event) => {
          event.preventDefault();
          addNewProduct();
          clearForm();
        }}
        className='flex flex-col justify-center items-center gap-5'
      >
        <label htmlFor='productName'>
          <input
            required
            id='productName'
            type='text'
            placeholder='Product Name'
            value={newProduct.productName}
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                productName: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor='description'>
          <textarea
            required
            id='description'
            placeholder='Product description'
            value={newProduct.description}
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                description: e.target.value,
              });
            }}
          ></textarea>
        </label>
        <label htmlFor='productPrice'>
          <input
            required
            id='productPrice'
            type='text'
            placeholder='Product Price'
            value={newProduct.productPrice}
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                productPrice: e.target.value,
              });
            }}
          />
        </label>
        <button
          className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
