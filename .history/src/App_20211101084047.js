import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div>
      <Navbar />
      {/* action boxes */}
      {/* footer */}
      <Footer />
    </div>
  ) : (
    <LoginButton />
  );
};

export default App;
