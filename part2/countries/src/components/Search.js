const Search = ({ searchString, setSearchString }) => {
  const searchStringChangeHandler = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <p>
      find countries{" "}
      <input value={searchString} onChange={searchStringChangeHandler} />
    </p>
  );
};

export default Search;
