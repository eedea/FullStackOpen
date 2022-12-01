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

const update = (newName, newNumber, id) => {
  const req = axios.put(`${baseUrl}/${id}`, {
    name: newName,
    number: newNumber,
  });
  return req.then((res) => res.data);
};

const del = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then((res) => res.data);
};

const personsService = { getAll, create, del ,update};
export default personsService;
