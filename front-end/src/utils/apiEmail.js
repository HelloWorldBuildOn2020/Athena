import axios from "axios";

const createInstance = (headers) => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_EMAIL
  });
};

const handleResponse = (res) =>
  !res.data.error ? Promise.resolve(res) : Promise.reject(new Error(res));

const catchError = (err) => Promise.reject(err);

export default {
  get: (path, headers = {}) =>
    createInstance(headers).get(path).then(handleResponse).catch(catchError),
  post: (path, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: "POST",
        data: body,
      })
      .then(handleResponse)
      .catch(catchError),
  put: (path, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: "PUT",
        data: body,
      })
      .then(handleResponse)
      .catch(catchError),
  delete: (path, body = {}, headers = {}) =>
    createInstance(headers)
      .request({
        url: path,
        method: "DELETE",
        data: body,
      })
      .then(handleResponse)
      .catch(catchError),
};
