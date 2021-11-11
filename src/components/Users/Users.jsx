import { useContext } from 'react';
import { UserContext } from '../../context/UsersContext';
import { Link } from 'react-router-dom';
const Users = () => {
  const { currentUser, admin, authorized, usersList } = useContext(UserContext);
  let userRol = currentUser.rol;
  let userStatus = currentUser.status;

  return (
    <div className='mt-4'>
      <div className='w-1/3 m-auto mb-4'>
        <div className='flex flex-col justify-center items-start gap-y-1'>
          <h3 className=''>Current user is {currentUser.email}</h3>
          <h3 className=''>Current role is {currentUser.rol}</h3>
          <h3 className=''>Current role is {currentUser.status}</h3>
        </div>
      </div>
      {userRol === admin && userStatus === authorized ? (
        <>
          <h2 className='text-center text-lg'>List of users</h2>
          <div className='w-10/12 m-auto flex justify-center items-center flex-wrap gap-5  mt-5'>
            {usersList.map((user) => (
              <div key={user._id} className='border p-4'>
                <div>
                  <span className='font-bold'>Email: </span>
                  {user.email}
                </div>
                <div>
                  <span className='font-bold'>Status: </span>
                  {user.status}
                </div>
                <div>
                  <span className='font-bold'>Rol: </span>
                  {user.rol}
                </div>
                <div className='mt-4'>
                  <Link
                    to={{
                      pathname: `/edit/user/${user._id}`,
                      state: { user },
                    }}
                  >
                    <button className='bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-1 px-2 rounded'>
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center'>
          <p className='mt-5'>You should not be here, but it's ok</p>
        </div>
      )}
    </div>
  );
};

export default Users;
