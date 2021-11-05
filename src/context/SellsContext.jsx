import { createContext } from 'react';

export const SellsContext = createContext(null);

const SellsContextProvider = ({ children }) => {
  const test = 'testing';
  // fetch all sells from db
  // place all the sells in state

  // add new sell

  // remove sell

  // edit sell
  return (
    <SellsContext.Provider value={{ test }}>{children}</SellsContext.Provider>
  );
};

export default SellsContextProvider;
