import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { UserContext } from '../../context/UsersContext';
import { Link } from 'react-router-dom';

const EditUser = () => {
  const [updated, setUpdated] = useState(false);

  const location = useLocation();
  const { userToEdit, setUserToEdit, editUserAndUpdateState } =
    useContext(UserContext);
  const { user } = location.state;
  useEffect(() => {
    setUserToEdit(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setUpdated(false);
    }, 3000);
  }, [updated]);
  const userUpdatedSuccessfully = () => {
    return <p>User Updated Successfully! Return now.</p>;
  };
  return (
    <div>
      <div className='flex justify-center flex-col items-center gap-y-4 mt-4'>
        <h3>Editing user:</h3>
        <h3>{userToEdit.email}</h3>
      </div>
      <div className='flex justify-center flex-col items-center gap-y-4 mt-4 '>
        <form
          action='PUT'
          onSubmit={(e) => {
            e.preventDefault();
            editUserAndUpdateState(userToEdit);
          }}
        >
          <div className='flex justify-center'>
            <select
              className=' bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              name='rol'
              id='rol'
              onChange={(e) => {
                setUserToEdit({ ...userToEdit, rol: e.target.value });
              }}
            >
              <option defaultValue value='noValue'>
                Select rol
              </option>
              <option value='admin'>Admin</option>
              <option value='seller'>Seller</option>
            </select>
          </div>
          <div className='flex justify-center'>
            <select
              className=' bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              name='status'
              id='status'
              onChange={(e) => {
                setUserToEdit({ ...userToEdit, status: e.target.value });
              }}
            >
              <option defaultValue value='noValue'>
                Select status
              </option>
              <option value='pending'>Pending</option>
              <option value='blocked'>Blocked</option>
              <option value='authorized'>Authorized</option>
            </select>
          </div>
          <div className='mt-5'>
            {userToEdit.rol !== 'noValue' && userToEdit.status !== 'noValue' && (
              <button
                className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'
                type='submit'
                onClick={() => setUpdated(true)}
              >
                Submit Changes
              </button>
            )}
          </div>
        </form>
        {updated && (
          <div className='flex justify-center items-center'>
            {userUpdatedSuccessfully()}
          </div>
        )}
        <div className='flex justify-center items-center my-5'>
          <Link to='/users'>
            <button className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'>
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
