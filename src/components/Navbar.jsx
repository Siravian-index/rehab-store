import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const { user } = useAuth0();

  // console.log(user);

  return (
    <nav className='flex justify-between items-center border '>
      <ul className='flex justify-center items-center gap-2'>
        <Link to='/'>
          <img className='w-10 ml-5' src={user.picture} alt={user.name} />
        </Link>
        {/* <Link to='/'>{user.name}</Link> */}
        <Link to='/sells'>Sells</Link>
        <Link to='/store'>Store</Link>
        <Link to='/users'>Users</Link>
      </ul>
      <div className='mr-5'>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
