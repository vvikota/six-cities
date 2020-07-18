import axios from "axios";

export const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      // history.pushState(null, null, `/login`);
      // eslint-disable-next-line no-console
      console.log(`error 403: required registartion`);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

