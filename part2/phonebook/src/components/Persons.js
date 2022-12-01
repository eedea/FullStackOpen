import Person from "./Person";

const Persons = ({ persons, setPersons }) => (
  <>
    {persons.map((person) => (
      <Person
        key={person.name}
        person={person}
        persons={persons}
        setPersons={setPersons}
      />
    ))}
  </>
);

export default Persons;
