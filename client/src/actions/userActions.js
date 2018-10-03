import axios from "axios";
import { USER_ROUTES } from "../Components/utils/misc";
import { LOGIN_USER, REGISTER_USER } from "./types";

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
