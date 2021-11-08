import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

const NewProduct = () => {
  const {
    createProduct,
    newlyCreatedProduct,
    setNewlyCreatedProduct,
    clearForm,
  } = useContext(ProductsContext);

  return (
    <div>
      <form
        action=''
        onSubmit={(event) => {
          event.preventDefault();
          createProduct(newlyCreatedProduct);
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
            value={newlyCreatedProduct.productName}
            onChange={(e) => {
              setNewlyCreatedProduct({
                ...newlyCreatedProduct,
                productName: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor='description'>
          <input
            type='text'
            required
            id='description'
            placeholder='Product description'
            value={newlyCreatedProduct.description}
            onChange={(e) => {
              setNewlyCreatedProduct({
                ...newlyCreatedProduct,
                description: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor='productPrice'>
          <input
            required
            id='productPrice'
            type='text'
            placeholder='Product Price'
            value={newlyCreatedProduct.productPrice}
            onChange={(e) => {
              setNewlyCreatedProduct({
                ...newlyCreatedProduct,
                productPrice: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor='status'>
          <input
            required
            id='status'
            type='text'
            placeholder='Status'
            value={newlyCreatedProduct.status}
            onChange={(e) => {
              setNewlyCreatedProduct({
                ...newlyCreatedProduct,
                status: e.target.value,
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
