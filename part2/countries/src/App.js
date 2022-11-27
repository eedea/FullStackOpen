import { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);
  const filteredCountries = countries.filter((country) =>
    RegExp(searchString, "i").test(country.name.official)
  );
  return (
    <div>
      <Search searchString={searchString} setSearchString={setSearchString} />
      <Results countries={filteredCountries} />
    </div>
  );
}

export default App;
