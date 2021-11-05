import { createContext, useState } from 'react';

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const test = 'testing';
  // fetch all products from db
  // place all the products in state

  // add new product

  // remove product

  // edit product
  return (
    <ProductsContext.Provider value={{ test }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
