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

  return (
    <Router>
      <Switch>
        <Route path='store'>
          <h2>Store here</h2>
        </Route>
        <Route path='store'>
          <h2>Store here</h2>
        </Route>
        <Route path='store'>
          <h2>Store here</h2>
        </Route>
        <Route path='/'>
          {isAuthenticated ? (
            <div>
              <Navbar />
              {/* action boxes */}
              <Footer />
            </div>
          ) : (
            <WelcomePage />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
