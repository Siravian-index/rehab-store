import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav>
      <ul>
        <il>item1</il>
        <il>item2</il>
        <il>item3</il>
      </ul>
    </nav>
  );
};

export default Navbar;
