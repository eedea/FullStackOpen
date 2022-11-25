const Search = ({ searchString, setSearchString }) => {
  const searchStringChangeHandler = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      Filter shown with
      <input value={searchString} onChange={searchStringChangeHandler} />
    </div>
  );
};

export default Search;
