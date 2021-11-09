import { useState, useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import SingleProduct from './SingleProduct';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('description');
  // context
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter((product) => {
    return product[selectValue]
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-1'>
        <input
          className='shadow appearance-none border rounded mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
          <option defaultValue value='description'>
            Product's Description
          </option>
          <option value='productName'>Product's Name</option>
          <option value='_id'>Product's Id</option>
        </select>
      </div>
      <ul className='md:w-11/12 md:flex md:flex-wrap md:gap-4 md:justify-around mx-auto my-3 border px-4'>
        {filteredProducts.map((item) => {
          return <SingleProduct item={item} key={item._id} />;
        })}
      </ul>
    </>
  );
};

export default SearchBar;
