import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <Router>

    <div>
      <Navbar />
      {/* action boxes */}
      <Footer />
    </div>
  ) : (
    <WelcomePage />
  );
    </Router>
};

export default App;
