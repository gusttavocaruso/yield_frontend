import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'http://localhost:3001/supply',
  timeout: 5000,
  headers: defaultHeaders,
});

const userApi = {
  post: (url, data, headers) => instance.post(url, data, { headers }),
};

export default userApi;
