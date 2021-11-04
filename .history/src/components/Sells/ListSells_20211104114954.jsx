import SearchBar from './SearchBar';
import SingleSell from './SingleSell';

const ListSells = ({ setSellData, sellData }) => {
  return (
    <div>
      <SearchBar />
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
