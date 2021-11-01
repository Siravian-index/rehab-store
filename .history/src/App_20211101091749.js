import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
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
          <Route path='store'></Route>
          <Route path='sells'></Route>
          <Route path='edit'></Route>
          <Route path='/'>
            <div>
              {/* action boxes */}
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;
