const SearchBar = () => {
  return (
    <div className='flex justify-center gap-1'>
      <input type='text' placeholder='Search by:' />
      <select name='' id=''>
        <option value=''>Client Name</option>
        <option value=''>ID</option>
        <option value=''></option>
      </select>
    </div>
  );
};

export default SearchBar;
