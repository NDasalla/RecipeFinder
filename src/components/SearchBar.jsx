import { PropTypes } from "prop-types";

const SearchBar = ({ search, setSearch }) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-center space-x-2">
      <label htmlFor="search">Search Recipe Name:</label>
      <input
        type="text"
        name="search"
        onChange={searchHandler}
        value={search}
        className="border-[1px] border-black focus:outline-none"
      />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default SearchBar;
