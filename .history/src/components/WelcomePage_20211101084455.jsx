import LoginButton from './LoginButton';

const WelcomePage = () => {
  return (
    <div className='w-1/2 m-auto my-10'>
      <h3 className='text-center'>Welcome to the store!</h3>
      <p className='text-center'>Please Login using a google account </p>
      <div>
        <LoginButton />
      </div>
    </div>
  );
};

export default WelcomePage;
