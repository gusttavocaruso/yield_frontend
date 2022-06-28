import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'https://yield-check-back.herokuapp.com/account',
  timeout: 5000,
  headers: defaultHeaders,
});

const sign = {
  post: (url, data, headers) => instance.post(url, data, { headers }),
};

export default sign;
