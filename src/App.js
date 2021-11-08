import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sells from './components/Sells/Sells';
import EditProduct from './components/Store/EditProduct';
import Store from './components/Store/Store';
import WelcomePage from './components/WelcomePage';
// context
import ProductsContextProvider from './context/ProductsContext';
import SellsContextProvider from './context/SellsContext';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='text-center'>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <WelcomePage />;
  } else {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/store'>
            <ProductsContextProvider>
              <Store />
            </ProductsContextProvider>
          </Route>
          <Route exact path='/edit/product/:id'>
            <ProductsContextProvider>
              <EditProduct />
            </ProductsContextProvider>
          </Route>
          <Route exact path='/sells'>
            <ProductsContextProvider>
              <SellsContextProvider>
                <Sells />
              </SellsContextProvider>
            </ProductsContextProvider>
          </Route>
          <Route exact path='/users'></Route>
          <Route exact path='/'>
            <div>{/* action boxes */}</div>
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;
