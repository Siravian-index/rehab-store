import LoginButton from './LoginButton';

const WelcomePage = () => {
  return (
    <div className='w-2/4'>
      <h3>Welcome to the store!</h3>
      <p>Please Login using a google account </p>
      <LoginButton />
    </div>
  );
};

export default WelcomePage;
