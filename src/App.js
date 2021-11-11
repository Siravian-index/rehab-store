import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ActionBoxes from './components/ActionBoxes';
// components
import Navbar from './components/Navbar';
import EditSell from './components/Sells/EditSell';
import Sells from './components/Sells/Sells';
import EditProduct from './components/Store/EditProduct';
import Store from './components/Store/Store';
import EditUser from './components/Users/EditUser';
import SetUserGmail from './components/Users/SetUserGmail';
import Users from './components/Users/Users';
import WelcomePage from './components/WelcomePage';
// context

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
        <SetUserGmail />
        <Navbar />
        <Switch>
          <Route exact path='/store'>
            <Store />
          </Route>
          <Route exact path='/edit/product/:id'>
            <EditProduct />
          </Route>
          <Route exact path='/sells'>
            <Sells />
          </Route>
          <Route exact path='/edit/sell/:id'>
            <EditSell />
          </Route>
          <Route exact path='/users'>
            <Users />
          </Route>
          <Route path='/edit/user/:id'>
            <EditUser />
          </Route>
          <Route exact path='/'>
            <ActionBoxes />
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;
