import { HTTP_CLIENT } from './config/config';

export const getProducts = () => {
  return HTTP_CLIENT.get('/products/');
};
