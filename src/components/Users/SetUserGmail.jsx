import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UsersContext';
import { useAuth0 } from '@auth0/auth0-react';
const SetUserGmail = () => {
  const { user } = useAuth0();
  const { createUser } = useContext(UserContext);

  useEffect(() => {
    createUser(user.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default SetUserGmail;
