import "./search.css";

const SearchBox = () => {
  return (
    <form className="d-flex me-5" role="search">
      <input
        className="form-control search-box"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
};

export default SearchBox;
