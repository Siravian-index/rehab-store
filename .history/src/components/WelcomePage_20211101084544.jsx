import LoginButton from './LoginButton';

const WelcomePage = () => {
  return (
    <div className='w-1/2 m-auto my-10 text-center'>
      <h3 className=' my-6'>Welcome to the store!</h3>
      <p className=' my-6'>Please Login using a google account </p>
      <div className=' my-6'>
        <LoginButton />
      </div>
    </div>
  );
};

export default WelcomePage;
