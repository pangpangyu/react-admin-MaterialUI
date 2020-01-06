import axios from 'axios';

var request = axios.create({});

request.defaults.baseURL = '/';
request.defaults.withCredentials = true;
request.defaults.timeout = 60000;

request.interceptors.request.use(
  config => {
    return config;
  }
)

request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
