import { HTTP_CLIENT } from './config/config';

export const signUp = (params: any) => {
  return HTTP_CLIENT.post('/signup', params);
};

export const signIn = (params: string) => {
  return HTTP_CLIENT.post('login', params);
};
export const addFCMToken = (params: any) => {
  return HTTP_CLIENT.post('fcm-token', params);
};

export const getAccessToekn = (params: any) => {
  return HTTP_CLIENT.post('auth/refresh', params);
};

export const forgotPassword = (params: any) => {
  return HTTP_CLIENT.post('forget-password', params);
};
export const otp = (params: any) => {
  return HTTP_CLIENT.post('otp', params);
};
