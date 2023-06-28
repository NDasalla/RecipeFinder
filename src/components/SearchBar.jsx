import { PropTypes } from "prop-types";

const SearchBar = ({ search, setSearch }) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  //  const maxLengthHandler = (e) => {
  //      setMaxLength(e.target.value);
  //  }

  //  const sortHandler = (e) => {
  //      sortByLength(e.target.value);
  //  }

  // const sortByLength = () => {
  //     if(sortValue = false){
  //         sortValue = true;
  //         setSortValue = sortValue;
  //     }
  // }

  return (
    <div className="flex justify-center space-x-2">
      <label htmlFor="search">Search Recipe Name:</label>
      <input
        type="text"
        name="search"
        onChange={searchHandler}
        value={search}
        className="border-[1px] border-black"
      />
      {/* <label htmlFor="max-length">Max Length</label>
         <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
         <button onClick = {sortHandler}>Sort</button> */}
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default SearchBar;
