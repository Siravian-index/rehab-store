import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className='flex'>
      <ul>
        <div className=''>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <il>item1</il>
        <il>item2</il>
        <il>item3</il>
      </ul>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
