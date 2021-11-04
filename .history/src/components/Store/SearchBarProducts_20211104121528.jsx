import { useState } from 'react';
import SingleSell from './SingleSell';

const SearchBar = ({ productData, setProductData }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('clientName');

  const filteredProducts = sellData.filter((sell) => {
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
          <option value='sellerName'>Seller's Name</option>
          <option selected value='clientName'>
            Client's Name
          </option>
          <option value='clientID'>Client's Id</option>
          <option value='id'>Product's Id</option>
        </select>
      </div>
      <ul className='w-1/3 mx-auto my-3 border px-4'>
        {filteredProducts.map((item) => {
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
