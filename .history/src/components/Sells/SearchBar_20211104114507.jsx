const SearchBar = () => {
  return (
    <div className='flex justify-center gap-1'>
      <input type='text' placeholder='Search by:' />
      <select name='search' id='searchSells' className=''>
        <option value=''>Client's Name</option>
        <option value=''>Client's Id</option>
        <option value=''>Product's Id</option>
      </select>
    </div>
  );
};

export default SearchBar;
