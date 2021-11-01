import LoginButton from './LoginButton';

const WelcomePage = () => {
  return (
    <div className='w-1/2 m-auto my-10 text-center'>
      <h3 className=''>Welcome to the store!</h3>
      <p className=''>Please Login using a google account </p>
      <div className=''>
        <LoginButton />
      </div>
    </div>
  );
};

export default WelcomePage;
