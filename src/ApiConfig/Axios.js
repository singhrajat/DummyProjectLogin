import axios from 'axios';

// Add a request interceptor
var client = axios.create();

client.interceptors.request.use(
  config => {
    if (config.authorization !== false) {
      const token = false; // get token from storage and if available then added
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
    }
    console.log("request ",config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  response => {
    console.log("response ",response?.data);
    return response;
  },
  async error => {
    if (
      error.response?.status === 401 &&
      error.response.data.message === 'TokenExpiredError'
    ) {
    }
    return Promise.reject(error);
  },
);

export default client;
