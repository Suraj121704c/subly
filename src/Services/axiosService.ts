import axios from 'axios';

//user-defined import files
import store from '../Redux/store';
import {BASE_URL} from './ApiConfig';
import {logOutAction} from '../Redux/Actions/logoutAction';

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000 * 4, // 4 mint
  timeoutErrorMessage: 'Timeout Error',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const formInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000 * 4, // 4 mint
  timeoutErrorMessage: 'Timeout Error',
  headers: {
    'Content-Type': 'multipart/form-data; charset=utf-8;',
  },
});

export const attachTokenToRequest = (token: string) => {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  formInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

instance.interceptors.request.use(
  async request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    if (response?.data?.status_code == 401) {
      store.dispatch(logOutAction());
    }
    return response;
  },
  async error => {
    console.log('Global Error2: ', JSON.stringify(error?.response?.data));
    // Check if the response status is 401
    if (error.response && error?.response?.status === 401) {
      store.dispatch(logOutAction());
    }
    return Promise.reject(error);
  },
);
