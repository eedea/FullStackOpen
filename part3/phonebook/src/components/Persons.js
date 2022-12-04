import Person from "./Person";

const Persons = ({ persons, setPersons, setNotification }) => (
  <>
    {persons.map((person) => (
      <Person
        key={person.name}
        person={person}
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
      />
    ))}
  </>
);

export default Persons;
