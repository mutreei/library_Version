import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 6000,
});

instance.interceptors.request.use((config) => {
  /* eslint-disable no-param-reassign */
  config.headers.Authorization = window.sessionStorage.getItem('token');
  console.log('config', config);
  return config;
});

export default instance;
