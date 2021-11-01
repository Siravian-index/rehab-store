import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { Link } from '';

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className='flex justify-between bg-gray-400-700'>
      <ul className='flex gap-10'>
        <li className=''>
          <img className='w-10 ml-5' src={user.picture} alt={user.name} />
        </li>
        <li>{user.name}</li>
      </ul>
      <div className='mr-5'>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
