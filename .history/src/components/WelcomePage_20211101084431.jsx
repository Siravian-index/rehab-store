import LoginButton from './LoginButton';

const WelcomePage = () => {
  return (
    <div className='w-1/2 m-auto'>
      <h3 className='text-center'>Welcome to the store!</h3>
      <p className='text-center'>Please Login using a google account </p>
      <LoginButton />
    </div>
  );
};

export default WelcomePage;
