import { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className='flex justify-center gap-1'>
      <input
        type='text'
        placeholder='Search by:'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <select name='search' id='searchSells' className=''>
        <option selected value='clientName'>
          Client's Name
        </option>
        <option value='clientID'>Client's Id</option>
        <option value='id'>Product's Id</option>
      </select>

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

export default SearchBar;
