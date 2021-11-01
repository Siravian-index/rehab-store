import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const GoogleAuth = () => {
  const history = useHistory();
  const onLoginSuccess = (response) => {
    console.log();
    console.log('Login Success: ', response);
    console.log(response.profileObj);
    history.push('/store');
  };
  const onLoginFailure = (response) => {
    console.log('Login failed');
    console.log(response);
  };
  const clientId =
    '872604210222-os1mkh0vd5o8tj583a8jk7ve9q2f5cpv.apps.googleusercontent.com';

  return (
    <div className='flex justify-center flex-col items-center my-5'>
      <h2 className='my-5'>Enter using a Google Account</h2>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleAuth;
