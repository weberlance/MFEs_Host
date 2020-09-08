import { GET_TOKEN, SET_TOKEN, UNSET_TOKEN } from '../types';

export const getToken = () => ({
  type: GET_TOKEN,
});

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

export const unsetToken = () => ({
  type: UNSET_TOKEN,
});
