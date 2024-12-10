import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

export default apiClient;