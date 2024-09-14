import axios from 'axios';
import Config from 'react-native-config';

const apiBaseUrl = Config.API_BASE_URL || 'https://dummyjson.com';

// Create an instance of axios with default configurations
const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosInstance;
