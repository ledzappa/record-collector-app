import axios from 'axios';
import { Record } from '../Interfaces/Record';
const mocks = true;

const api = {
  login: (credentials: any) =>
    axios.get(mocks ? 'mocks/login.json' : '/api/login', credentials),
  getCollections: () =>
    axios.get(mocks ? 'mocks/collections.json' : '/api/collection'),
  getRecords: () => axios.get(mocks ? 'mocks/records.json' : '/api/record'),
  addRecord: (record: Record) =>
    axios.post(false ? 'mocks/records.json' : '/api/record', record),
};

export default api;
