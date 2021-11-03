import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sells from './components/Sells/Sells';
import Store from './components/Store/Store';
import WelcomePage from './components/WelcomePage';

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
          <Route path='/store'>
            <Store />
          </Route>
          <Route path='/sells'>
            <Sells />
          </Route>
          <Route path='/edit'></Route>
          <Route path='/'>
            <div>{/* action boxes */}</div>
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;
