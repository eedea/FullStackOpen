import Weather from "./Weather";

const CountryDetails = ({ country }) => (
  <div>
    <h2>{country.name.official}</h2>
    <p>Capital {country.capital}</p>
    <p>Area {country.area}</p>
    <h3>Languages</h3>
    <ul>
      {Object.entries(country.languages).map((language) => (
        <li key={language[0]}>{language[1]}</li>
      ))}
    </ul>
    <img src={country.flags.png} alt={`Flag of ${country.name.common}`}></img>
    <Weather city={country.capital} />
  </div>
);
export default CountryDetails;
