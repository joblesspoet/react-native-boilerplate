import axios from 'axios';

const API_INSTANCE = axios.create({
  baseURL: 'https://incontext.demo3.appelit.com/api',
});

// API_INSTANCE.interceptors.request.use((conf) => {
//   return conf;
// });

const API_INTERCEPTOR = (access_token) => {
  // Response interceptor for API calls
  API_INSTANCE.interceptors.request.use(
    async (conf) => {
      if (!conf.headers.Authorization) {
        conf.headers.Authorization = `Bearer ${access_token}`;
      }
      return conf;
      // return Promise.resolve(conf);
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor for API calls
  API_INSTANCE.interceptors.response.use(
    (response) => {
      return response.data;
    },
    async function (error) {
      const originalRequest = error.config;
      if (error.response?.status === 403 && !originalRequest._retry) {
        console.log("token expired");
        return false;
      }

      return Promise.reject(error);
    }
  );
};

export {API_INSTANCE, API_INTERCEPTOR};
