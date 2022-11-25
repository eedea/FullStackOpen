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
    { name: "Arto Hellas", number: "09123456789" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={persons} />
    </div>
  );
};

export default App;
