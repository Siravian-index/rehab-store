import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [newlyCreatedProduct, setNewlyCreatedProduct] = useState({
    productName: '',
    description: '',
    productPrice: '',
    status: '',
  });
  // fetch all products from db
  const getAllProducts = async () => {
    const res = await fetch('http://localhost:8000/api/products');
    const products = await res.json();
    setProducts(products.data);
  };
  // place all the products in state
  useEffect(() => {
    getAllProducts();
  }, []);
  // create product
  const createProduct = async (newProductObj) => {
    await fetch('http://localhost:8000/api/product', {
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
    fetch(`http://localhost:8000/api/product/${_id}`, {
      method: 'DELETE',
    });
    setProducts((prev) => prev.filter((obj) => obj._id !== _id));
  };

  // edit product
  const editProductById = async (id) => {};
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        createProduct,
        removeProductById,
        editProductById,
        newlyCreatedProduct,
        setNewlyCreatedProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
