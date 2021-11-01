import NewSell from './NewSell';

const Sells = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 my-5'>
        <h3>What do you need to do?</h3>
        <div>
          <button className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'>
            New sell
          </button>
          <button className='bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded'>
            See sells
          </button>
        </div>
      </div>

      <NewSell />
    </div>
  );
};

export default Sells;
