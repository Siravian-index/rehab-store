import { useState } from 'react';
import SingleProduct from './SingleProduct';

const SearchBar = ({ productData, setProductData }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('description');

  const filteredProducts = productData.filter((product) => {
    return product[selectValue]
      .toLowerCase()
      .includes(searchValue.toLowerCase());
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
          <option selected value='description'>
            Product's Description
          </option>
          <option value='productName'>Product's Id</option>
          <option value='id'>Product's Id</option>
        </select>
      </div>
      <ul className='w-1/3 mx-auto my-3 border px-4'>
        {filteredProducts.map((item) => {
          return (
            <SingleProduct
              productData={productData}
              setProductData={setProductData}
              item={item}
              key={item.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SearchBar;
