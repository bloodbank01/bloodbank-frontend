import axios from 'axios';
import ENDPOINTS from '../endpoints';
import Handler from '../Handler';
let token = '';
let vr = ''

(async() => {
  token =await Handler.getItem('token')
  vr =await Handler.getItem('vr')
})()

const apiClient = axios.create({
  baseURL: ENDPOINTS.baseUrl, // Set your base API URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Authorization': `vr ${vr}`,
  },
  // withCredentials: true, 
});

// Interceptor to conditionally add the token and custom headers
apiClient.interceptors.request.use(
  (config) => {
    // Conditionally add the token to the Authorization header
    if (config.token) {
      config.headers.Authorization = `Bearer ${config.token}`;
    }

    // Conditionally add any custom headers
    if (config.customHeaders) {
      config.headers = { ...config.headers, ...config.customHeaders };
    }

    return config
  },
  (error) => {
    console.log(error, '!!!!!!!!!!!!!!!!!!!!!!!!error')
    return Promise.reject(error);
  }
);

export default apiClient;
