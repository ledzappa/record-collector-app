import axios from 'axios';
import { Record } from '../Interfaces/Record';
const mocks = true;

const api = {
  login: (credentials: any) =>
    axios.get(mocks ? 'assets/mocks/login.json' : '/api/login', credentials),
  getCollections: () =>
    axios.get(mocks ? 'assets/mocks/collections.json' : '/api/collection'),
  getRecords: () => axios.get(mocks ? 'assets/mocks/records.json' : '/api/record'),
  addRecord: (record: Record) =>
    axios.post(false ? 'assets/mocks/records.json' : '/api/record', record),
};

export default api;
