import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import UsersContextProvider from './context/UsersContext';
import ProductsContextProvider from './context/ProductsContext';
import SellsContextProvider from './context/SellsContext';

ReactDOM.render(
  <Auth0Provider
    domain='dev-2rv8c3jm.us.auth0.com'
    clientId='SVkXn8UGq2ma8B16C4MihKOtDp8EGrJX'
    redirectUri={window.location.origin}
  >
    <ProductsContextProvider>
      <SellsContextProvider>
        <UsersContextProvider>
          <App />
        </UsersContextProvider>
      </SellsContextProvider>
    </ProductsContextProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
