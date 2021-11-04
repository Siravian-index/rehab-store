import SearchBar from './SearchBar';
import SingleSell from './SingleSell';

const ListSells = ({ setSellData, sellData }) => {
  return (
    <div>
      <SearchBar setSellData={setSellData} sellData={sellData} />
    </div>
  );
};

export default ListSells;
