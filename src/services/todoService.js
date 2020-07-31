import axios from 'axios';
const baseUrl = '/api/todos/';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async (toDo) => {
  const response = await axios.post(`${baseUrl}`, toDo);
  return response.data;
};

// update takes in id and newObject to update the observation
const update = async (id, toDo) => {
  const response = await axios.put(`${baseUrl}/${id}`, toDo);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default {
  get,
  getAll,
  create,
  remove,
  update,
};
