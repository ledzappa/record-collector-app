import axios from 'axios';

const api = {
  login: (credentials: any) => axios.post('/api/v1/login', credentials),
};

export default api;
