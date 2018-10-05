import axios from "axios";
import { USER_ROUTES } from "../Components/utils/misc";
import { AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_ROUTES}/login`, dataToSubmit)
    .then(res => res.data);
  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_ROUTES}/register`, dataToSubmit)
    .then(res => res.data);
  return {
    type: REGISTER_USER,
    payload: request
  };
}

export function auth() {
  const request = axios.get(`${USER_ROUTES}/auth`).then(res => res.data);
  return {
    type: AUTH_USER,
    payload: request
  };
}

export function logoutUser() {
  const request = axios.get(`${USER_ROUTES}/logout`).then(res => res.data);
  return {
    type: LOGOUT_USER,
    payload: request
  };
}
