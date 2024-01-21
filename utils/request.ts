import axios from "axios";

const $http = axios.create({
  baseURL: "/api/",
  withCredentials: true,
  maxRedirects: 0,
});

export default $http;
