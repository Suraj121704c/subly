import axios from 'axios';

//user-defined import files
import {BaseUrl} from './ApiConfig';

import store from '../Redux/store';
import {unAuthorizedAction} from '../Redux/Actions/logoutAction';
import {STRINGS} from '../Utils/constants';

export const instance = axios.create({
  baseURL: BaseUrl,
  timeout: 60000 * 4, // 4 mint
  timeoutErrorMessage: STRINGS.TIMEOUT_ERROR_MESSAGE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const formInstance = axios.create({
  baseURL: BaseUrl,
  timeout: 60000 * 4, // 4 mint
  timeoutErrorMessage: STRINGS.TIMEOUT_ERROR_MESSAGE,
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
      store.dispatch(unAuthorizedAction());
    }
    return response;
  },
  async error => {
    // Check if the response status is 401
    if (error.response && error.response.status === 401) {
      store.dispatch(unAuthorizedAction());
    }
    return Promise.reject(error);
  },
);
