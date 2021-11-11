import Footer from './Footer';
import LoginButton from './LoginButton';

const WelcomePage = () => {
  return (
    <div className='w-full h-full fixed top-0 left-0 z-50 bg-gray-800'>
      <div className='flex justify-center mt-5'>
        <h4 className='text-white text-lg'>Store Manager.</h4>
      </div>
      <div className='h-1/3 flex justify-center items-end'>
        <div className='flex gap-x-4 justify-center items-center'>
          <div>
            <h2 className='text-4xl font-bold text-white'>Welcome!</h2>
            <h4 className='text-white opacity-75'>Nice to see you again!</h4>
          </div>
          <div>
            <LoginButton />
          </div>
        </div>
      </div>

      <div className='fixed bottom-0 right-0 left-0'>
        <Footer textColor={'white'} />
      </div>
    </div>
  );
};

export default WelcomePage;
