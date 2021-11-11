import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

const EditProduct = () => {
  const [updated, setUpdated] = useState(false);
  const { id } = useParams();
  const {
    editProductById,
    updatedProduct,
    setUpdatedProduct,
    clearForm,
    getOneProductById,
    setAction,
  } = useContext(ProductsContext);

  useEffect(() => {
    // get the product from the db and applies
    // setUpdatedProduct on that obj
    // which puts all the product info into updatedProduct
    getOneProductById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setUpdated(false);
    }, 3000);
  }, [updated]);
  const productUpdatedSuccessfully = () => {
    return <p>Product updated Successfully! Return now.</p>;
  };

  return (
    <div>
      <h3 className='text-center my-5'>Edit product</h3>
      <h3 className='text-center my-5'>Product's id: {id}</h3>

      <form
        action=''
        onSubmit={(event) => {
          event.preventDefault();
          editProductById(updatedProduct);
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
            value={updatedProduct.productName}
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
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
            value={updatedProduct.description}
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
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
            value={updatedProduct.productPrice}
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
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
            value={updatedProduct.status}
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
                status: e.target.value,
              });
            }}
          />
        </label>

        <button
          className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
          type='submit'
          onClick={() => setUpdated(true)}
        >
          Add
        </button>
      </form>
      <div className='flex justify-center items-center my-5'>
        <Link to='/store'>
          <button
            className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
            onClick={() => {
              setAction('list');
            }}
          >
            Go back
          </button>
        </Link>
      </div>
      {updated && (
        <div className='flex justify-center items-center'>
          {productUpdatedSuccessfully()}
        </div>
      )}
    </div>
  );
};

export default EditProduct;
