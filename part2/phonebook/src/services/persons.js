import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const create = (newName, newNumber) => {
  const req = axios.post(baseUrl, {
    name: newName,
    number: newNumber,
  });
  return req.then((res) => res.data);
};

const personsService = { getAll, create };
export default personsService;
