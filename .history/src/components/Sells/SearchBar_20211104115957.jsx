import { useState } from 'react';
import SingleSell from './SingleSell';

const SearchBar = ({ sellData, setSellData }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('clientName');

  console.log(selectValue);
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-1'>
        <input
          type='text'
          placeholder='Search by:'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select
          name='search'
          id='searchSells'
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          <option selected value='clientName'>
            Client's Name
          </option>
          <option value='clientID'>Client's Id</option>
          <option value='id'>Product's Id</option>
        </select>
      </div>
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
    </>
  );
};

export default SearchBar;
