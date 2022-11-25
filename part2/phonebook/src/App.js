import { useState } from "react";
import Persons from "./components/Persons";
import Search from "./components/Search";
import AddPerson from "./components/AddPerson";

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchString={searchString} setSearchString={setSearchString} />
      <h2>Add a new</h2>
      <AddPerson
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
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
