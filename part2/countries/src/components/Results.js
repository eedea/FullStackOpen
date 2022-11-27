import CountryDetails from "./CountryDetails";

const Countries = ({ countries }) => (
  <>
    {countries.map((country) => (
      <p key={country.name.common}>{country.name.official}</p>
    ))}
  </>
);

const Results = ({ countries }) => {
  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  if (countries.length === 1) return <CountryDetails country={countries[0]} />;
  return <Countries countries={countries} />;
};

export default Results;
