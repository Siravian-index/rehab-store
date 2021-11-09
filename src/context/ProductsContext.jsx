import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const herokuURL = 'https://limitless-reaches-36434.herokuapp.com/';
  // const localhost = 'http://localhost:8000/';
  const fetchFrom = herokuURL;
  const [products, setProducts] = useState([]);
  const [newlyCreatedProduct, setNewlyCreatedProduct] = useState({
    productName: '',
    description: '',
    productPrice: '',
    status: '',
  });
  const [updatedProduct, setUpdatedProduct] = useState({
    productName: '',
    description: '',
    productPrice: '',
    status: '',
    _id: '',
  });
  // clear form
  const clearForm = () => {
    setNewlyCreatedProduct({
      productName: '',
      description: '',
      productPrice: '',
      status: '',
    });
  };

  // fetch all products from db
  const getAllProducts = async () => {
    const res = await fetch(`${fetchFrom}api/products`);
    const products = await res.json();
    setProducts(products.data);
  };
  // get one product by id
  const getOneProductById = async (_id) => {
    const res = await fetch(`${fetchFrom}api/product/${_id}`);
    const product = await res.json();
    setUpdatedProduct(product.data);
  };

  // place all the products in state
  useEffect(() => {
    getAllProducts();
  }, []);
  // create product
  const createProduct = async (newProductObj) => {
    await fetch(`${fetchFrom}api/product`, {
      method: 'POST',
      body: JSON.stringify(newProductObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    getAllProducts();
  };
  // remove product
  const removeProductById = (_id) => {
    fetch(`${fetchFrom}api/product/${_id}`, {
      method: 'DELETE',
    });
    setProducts((prev) => prev.filter((obj) => obj._id !== _id));
  };

  // edit product
  const editProductById = async (updatedObj) => {
    await fetch(`${fetchFrom}api/product/`, {
      method: 'PUT',
      body: JSON.stringify(updatedObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    getAllProducts();
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        createProduct,
        editProductById,
        removeProductById,
        newlyCreatedProduct,
        setNewlyCreatedProduct,
        getOneProductById,
        clearForm,
        updatedProduct,
        setUpdatedProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
