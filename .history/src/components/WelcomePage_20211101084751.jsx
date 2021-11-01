import LoginButton from './LoginButton';

const WelcomePage = () => {
  return (
    <div className='w-1/2 m-auto my-10 text-center'>
      <h3 className='my-5'>Welcome to the store!</h3>
      <p className='my-5'>Please Login using a google account </p>
      <div className='my-5'>
        <LoginButton />
      </div>
    </div>
  );
};

export default WelcomePage;
