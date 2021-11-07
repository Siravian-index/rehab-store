import LoginButton from './LoginButton';

const WelcomePage = () => {
  return (
    <div className='w-full m-auto my-10 p-10 text-center border'>
      <h3 className='my-5 text-3xl'>Welcome to the store!</h3>
      <p className='my-5'>
        Please Login using a <span className='underline'>Google</span> account{' '}
      </p>
      <div className='my-5'>
        <LoginButton />
      </div>
    </div>
  );
};

export default WelcomePage;
