import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

const UsersContextProvider = ({ children }) => {
  // const herokuURL = 'https://limitless-reaches-36434.herokuapp.com/';
  const localhost = 'http://localhost:8000/';
  const fetchFrom = localhost;
  const [usersList, setUsersList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [userToEdit, setUserToEdit] = useState({});

  // roles
  const admin = 'admin';
  const seller = 'seller';
  // status
  const pending = 'pending';
  const blocked = 'blocked';
  const authorized = 'authorized';

  //createUser
  const createUser = async (email) => {
    const res = await fetch(`${fetchFrom}api/user`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const user = await res.json();
    // console.log(user.data);
    setCurrentUser(user.data);
  };
  // getAllUsers
  const getUsersAndSetState = async () => {
    const res = await fetch(`${fetchFrom}api/users`);
    const users = await res.json();
    setUsersList(users.data);
  };

  useEffect(() => {
    getUsersAndSetState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // editUser
  const editUserAndUpdateState = async (updatedObj) => {
    await fetch(`${fetchFrom}api/user/`, {
      method: 'PUT',
      body: JSON.stringify(updatedObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    getUsersAndSetState();
  };

  return (
    <UserContext.Provider
      value={{
        usersList,
        setUsersList,
        currentUser,
        setCurrentUser,
        createUser,
        getUsersAndSetState,
        editUserAndUpdateState,
        userToEdit,
        setUserToEdit,
        admin,
        seller,
        pending,
        blocked,
        authorized,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UsersContextProvider;
