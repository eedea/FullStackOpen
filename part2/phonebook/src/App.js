import { useState } from "react";

const Person = ({ person }) => <p>{person.name}</p>;
const Persons = ({ persons }) => (
  <>
    {persons.map((person) => (
      <Person key={person.name} person={person} />
    ))}
  </>
);

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nameChangeHandler} />
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
