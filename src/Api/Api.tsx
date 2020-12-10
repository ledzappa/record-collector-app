import axios from 'axios';

const api = {
  login: async (credentials: any) =>
    await axios.post('/api/v1/login', credentials),
};

export default api;
