import personsService from "../services/persons";

const Person = ({ person, persons, setPersons }) => (
  <p>
    {person.name} {person.number}{" "}
    <button
      onClick={() => {
        if (window.confirm(`Delete ${person.name}?`)) {
          personsService
            .del(person.id)
            .then(() => setPersons(persons.filter((p) => p.id !== person.id)));
        }
      }}
    >
      Delete
    </button>
  </p>
);

export default Person;
