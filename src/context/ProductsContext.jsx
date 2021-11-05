import { createContext, useState } from 'react';

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  // fetch all products from db
  const getAllProducts = async () => {
    const res = await fetch('http://localhost:8000/api/products');
    const products = await res.json();
    console.log(products.data);
    return products.data;
  };
  // place all the products in state
  const [products, setProducts] = useState(getAllProducts());
  console.log(products);
  // remove product

  // edit product
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
