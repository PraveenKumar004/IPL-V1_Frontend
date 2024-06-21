import axios from 'axios';

const backendUrl ='http://localhost:5000'

const api = axios.create({
  baseURL: backendUrl
});

export default api;
