import { useState, useEffect } from "react";
import axios from "axios";

import Persons from "./components/Persons";
import Search from "./components/Search";
import AddPerson from "./components/AddPerson";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
