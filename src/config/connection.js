import axios from 'axios';
import {refreshToken} from '../actions/authActions';
import {API_ROUTES_ENDPOINTS} from './apiRoutes';

const API_INSTANCE = axios.create({
  baseURL: '',
});

const API_INTERCEPTOR = async (store) => {
  // Response interceptor for API calls
  API_INSTANCE.interceptors.request.use(
    async (conf) => {
      const {auth} = await store.getState();

      if (auth.access_token !== null && auth.is_logged_in) {
        // console.log('using token : ', auth.access_token)
        conf.headers.Authorization = `Bearer ${auth.access_token}`;
      }
      return conf;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // Response interceptor for API calls
  API_INSTANCE.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      console.log('Error code is: ', error.response?.status);
      // console.log('Retry is: ', originalRequest);

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const {auth} = await store.getState();

        const obj = {
          method: 'POST',
          url: API_ROUTES_ENDPOINTS.REFRESH_JWT,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.access_token}`,
          },
        };
        const res = await API_INSTANCE(obj).then((data) => data);
        const {token} = res.data;
        await store.dispatch(refreshToken(res.data.token));
        console.log('New token is: ', token);

        return API_INSTANCE(originalRequest);
      }
      return Promise.reject(error);
    },
  );
};

export {API_INSTANCE, API_INTERCEPTOR};
