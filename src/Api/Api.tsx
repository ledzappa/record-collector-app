import axios from 'axios';
import { Record } from '../Interfaces/Record';
const mocks = true;

const api = {
  login: (credentials: any) =>
    axios.get(mocks ? 'assets/mocks/login.json' : '/api/login', credentials),
  getCollections: () =>
    axios.get(mocks ? 'assets/mocks/collections.json' : '/api/collection'),
  getRecords: () =>
    axios.get(mocks ? 'assets/mocks/records.json' : '/api/record'),
  addRecord: (record: any, image: any) => {
    // send as formdata so we can append images to req
    const formData = new FormData();
    Object.keys(record).forEach((key: string) =>
      formData.append(key, record[key])
    );
    formData.append('image', image);
    return axios.post('/api/record', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  },
};

export default api;
