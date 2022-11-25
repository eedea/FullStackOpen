import { useState } from "react";

const Person = ({ person }) => (
  <p>
    {person.name} {person.number}
  </p>
);
const Persons = ({ persons }) => (
  <>
    {persons.map((person) => (
      <Person key={person.name} person={person} />
    ))}
  </>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (
      persons.find((person) => {
        return person.name === newName;
      })
    ) {
      return alert(`${newName} is already added to phonebook`);
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setNewNumber(event.target.value);
  };
  const searchStringChangeHandler = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with
        <input value={searchString} onChange={searchStringChangeHandler} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nameChangeHandler} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons
        persons={persons.filter(
          (person) =>
            searchString === "" ||
            RegExp(`${searchString}`, "i").test(person.name)
        )}
      />
    </div>
  );
};

export default App;
