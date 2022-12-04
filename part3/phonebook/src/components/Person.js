import personsService from "../services/persons";

const Person = ({ person, persons, setPersons, setNotification }) => {
  const deleteFunction = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .del(person.id)
        .then(() => {
          setNotification({
            message: `${person.name} deleted`,
            type: "success",
          });
          setTimeout(() => {
            setNotification({ message: null, type: "" });
          }, 5000);

          setPersons(persons.filter((p) => p.id !== person.id));
        })
        .catch((err) => {
          setNotification({
            message: `${person.name} is already deleted`,
            type: "error",
          });
          setTimeout(() => {
            setNotification({ message: null, type: "" });
          }, 5000);
          setPersons(persons.filter((p) => p.id !== person.id));
        });
    }
  };
  return (
    <p>
      {person.name} {person.number}{" "}
      <button onClick={deleteFunction}>Delete</button>
    </p>
  );
};

export default Person;
