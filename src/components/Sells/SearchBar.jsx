import { useState, useContext } from 'react';
import { SellsContext } from '../../context/SellsContext';
import SingleSell from './SingleSell';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('clientName');
  // context
  const { sellList } = useContext(SellsContext);

  // filter sells
  const filteredSells = sellList.filter((sell) => {
    return sell[selectValue].toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-1'>
        <input
          className='p-3'
          type='text'
          placeholder='Search by:'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select
          className=' bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          name='search'
          id='searchSells'
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          <option defaultValue value='clientName'>
            Client's Name
          </option>
          <option value='clientID'>Client's Id</option>
          <option value='_id'>Product's Id</option>
        </select>
      </div>
      {/* <ul className='flex flex-col md:flex-row md:justify-around md:items-center flex-wrap'> */}
      <ul className='md:w-1/3 mx-auto my-3 border px-4'>
        {filteredSells.map((item) => {
          return <SingleSell item={item} key={item._id}></SingleSell>;
        })}
      </ul>
    </>
  );
};

export default SearchBar;
