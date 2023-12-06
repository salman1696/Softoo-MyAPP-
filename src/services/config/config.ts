import axios, { AxiosInstance } from 'axios';
import { getAccessToekn } from '../AuthService';
import { store } from '../../store';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/benirvingplt/products',
});

const initialConfig = () => {
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const { user } = store.getState().user;
      if (user && user?.access) {
        config.headers.Authorization = `Bearer ${user.access}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );
};

HTTP_CLIENT.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: { response: { status: number }; }) => {
    if (error.response.status === 401) {
      console.log('error found', error.response);
      const { user } = store.getState().user;
      const parms = {
        refresh: user.refresh,
      };
    }
    return Promise.reject(error);
  },
);

export { HTTP_CLIENT, setupAxios, initialConfig };
