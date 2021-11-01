import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className='flex justify-between bg-gray-400'>
      <ul className='flex gap-10 justify-center items-center'>
        <li className=''>
          <img className='w-10 ml-5' src={user.picture} alt={user.name} />
        </li>
        <Link to='/'>{user.name}</Link>
        <Link to='/store'>Store</Link>
        <Link to='/sells'>Sells</Link>
        <Link to='/edit'>Edit</Link>
      </ul>
      <div className='mr-5'>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
