import axios, { AxiosError } from 'axios';
type AxiosErrorHandler = (error: AxiosError) => void;

const axiosErrorHandler: AxiosErrorHandler = (error: any) => {
  if (error.response) {
    if (error.response.data && error.response.data?.message) {
      throw new Error(error.response.data?.message);
    } else {
      throw new Error('Something went wrong');
    }
  } else if (error.request) {
    throw new Error('No response received from the server');
  } else {
    throw new Error('Request setup error');
  }
};

export default axiosErrorHandler;

axios.interceptors.response.use(
  response => response,
  error => {
    const axiosError = error as AxiosError;
    axiosErrorHandler(axiosError);
    return Promise.reject(error);
  }
);
