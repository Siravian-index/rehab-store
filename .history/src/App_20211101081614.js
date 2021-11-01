import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div>
      <LogoutButton />
      <Profile />
    </div>
  ) : (
    <LoginButton />
  );
};

export default App;
