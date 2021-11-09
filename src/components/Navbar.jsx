import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import useWindowSize from '../customHooks/useWindowSize';

const Navbar = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const { user } = useAuth0();

  let size = useWindowSize();

  return (
    <nav className=' md:w-10/12 m-auto flex justify-between items-center mt-1'>
      <ul className='md:w-1/2 w-2/3 flex justify-evenly items-center'>
        <li>
          <Link to='/'>
            <img
              className='object-contain h-10 w-full'
              src={user.picture}
              alt={user.name}
            />
          </Link>
        </li>
        {size.width > 590 && <li>{user.name}</li>}
        <li className='hover:text-blue-700'>
          <Link className='' to='/sells'>
            Sells
          </Link>
        </li>
        <li className='hover:text-blue-700'>
          <Link to='/store'>Store</Link>
        </li>
        <li className='hover:text-blue-700'>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
