import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/api', // Update to match your backend port
  headers: { 'Content-Type': 'application/json' },
});

export const getUsers = async () => {
  try {
    const response = await apiClient.get('/users'); // Adjust the endpoint as needed
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

// You can add more API functions here
export default apiClient;
