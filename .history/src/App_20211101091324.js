import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <WelcomePage />
  }

  return (
    <Router>
      <Switch>
        <Route path='store'>
          <Navbar />
        </Route>
        <Route path='sells'>
          <Navbar />
        </Route>
        <Route path='edit'>
          <Navbar />
        </Route>
        <Route path='/'>
          {isAuthenticated ? (
            <div>
              <Navbar />
              {/* action boxes */}
              <Footer />
            </div>
          ) : (
            
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
