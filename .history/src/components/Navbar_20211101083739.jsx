import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className='flex justify-between'>
      <ul className='flex'>
        <li className=''>
          <img className='w-10' src={user.picture} alt={user.name} />
        </li>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
