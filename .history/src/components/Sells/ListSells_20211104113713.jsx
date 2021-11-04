import SearchBar from '../SearchBar';
import SingleSell from './SingleSell';

const ListSells = ({ setSellData, sellData }) => {
  return (
    <div>
      <h3 className='text-center'>add a searchbar</h3>
      <SearchBar />
      {/* <h3 className='text-center my-5 font-bold'>The last sells are: </h3> */}
      <ul className='w-1/3 mx-auto my-3 border px-4'>
        {sellData.map((item) => {
          return (
            <SingleSell
              setSellData={setSellData}
              sellData={sellData}
              item={item}
              key={item.id}
            ></SingleSell>
          );
        })}
      </ul>
    </div>
  );
};

export default ListSells;
