import axios from 'axios';

const API_INSTANCE = axios.create({
  baseURL: 'https://incontext.demo3.appelit.com/api',
});

export default API_INSTANCE;
