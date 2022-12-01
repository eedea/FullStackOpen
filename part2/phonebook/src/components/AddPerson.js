import personsService from "../services/persons";

const AddPerson = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    if (!newName) return alert("Name field cannot be empty");
    if (!newNumber) return alert("Number field cannot be empty");

    if (
      persons.find((person) => {
        return person.name === newName;
      })
    ) {
      return alert(`${newName} is already added to phonebook`);
    }
    personsService.create(newName, newNumber).then((person) => {
      setPersons(persons.concat(person));
      setNewName("");
      setNewNumber("");
    });
  };

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setNewNumber(event.target.value);
  };

  return (
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
  );
};

export default AddPerson;
