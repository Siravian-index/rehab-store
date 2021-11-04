import { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className='flex justify-center gap-1'>
      <input type='text' placeholder='Search by:' />
      <select name='search' id='searchSells' className=''>
        <option selected value='clientName'>
          Client's Name
        </option>
        <option value='clientID'>Client's Id</option>
        <option value='id'>Product's Id</option>
      </select>
    </div>
  );
};

export default SearchBar;
