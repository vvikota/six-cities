import axios from "axios";
// import {ActionCreator} from "./reducer.js";

// export const configureAPI = (dispatch) => {
export const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      // eslint-disable-next-line no-console
      console.log(`Обработал ошибку 403`);
      // dispatch(ActionCreator.requireAuthorization(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

