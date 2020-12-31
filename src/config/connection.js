import axios from 'axios';

export const API_INSTANCE = axios.create({
  baseURL: 'https://incontext.demo3.appelit.com/api',
});

export const API_END_POINTS = {
  AUTH_END_POINTS: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    REFRESH_TOKEN: '/refresh-token',
    LOGOUT: '/logout',
  },
};
