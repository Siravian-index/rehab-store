const SearchBar = () => {
  return (
    <div className='flex justify-center gap-1'>
      <input type='text' placeholder='Search by:' />
      <select name='search' id='searchSells' className=''>
        <option value='clientName'>Client's Name</option>
        <option value='clientID'>Client's Id</option>
        <option value=''>Product's Id</option>
      </select>
    </div>
  );
};

export default SearchBar;
