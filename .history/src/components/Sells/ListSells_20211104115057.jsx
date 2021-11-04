import SearchBar from './SearchBar';

const ListSells = ({ setSellData, sellData }) => {
  return (
    <div>
      <SearchBar setSellData={setSellData} sellData={sellData} />
    </div>
  );
};

export default ListSells;
