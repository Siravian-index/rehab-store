import { useContext, useState } from 'react';
import { UserContext } from '../../context/UsersContext';
import NewSell from './NewSell';
import SearchBar from './SearchBar';

const Sells = () => {
  const [action, setAction] = useState('');
  const { currentUser, admin, seller, authorized } = useContext(UserContext);
  let userRol = currentUser.rol;
  let userStatus = currentUser.status;
  return (
    <>
      {userRol === seller ||
      (userRol === admin && userStatus === authorized) ? (
        <div>
          <div className='flex flex-col justify-center items-center gap-4 my-5'>
            <h3>What do you need to do?</h3>
            <div className='mb-5'>
              <button
                className='bg-black hover:bg-gray-900 text-white text-center mx-3 py-2 px-4 rounded'
                onClick={() => {
                  setAction('add');
                }}
              >
                New sell
              </button>
              <button
                className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
                onClick={() => {
                  setAction('list');
                }}
              >
                See List
              </button>
            </div>
          </div>

          {action === 'add' && <NewSell />}
          {action === 'list' && <SearchBar />}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <p className='mt-5'>You should not be here</p>
        </div>
      )}
    </>
  );
};

export default Sells;
