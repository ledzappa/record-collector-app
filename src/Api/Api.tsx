import axios from 'axios';
const mocks = true;

const api = {
  login: (credentials: any) =>
    axios.get(mocks ? 'mocks/login.json' : '/api/v1/login', credentials),
  getCollections: () => axios.get(
    mocks ? 'mocks/collections.json' : '/api/v1/collection'
  ),
};

export default api;
