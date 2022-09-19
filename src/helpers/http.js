import axios from "axios";

const http = (token) => {
  const headers = {};
  console.log(process.env.REACT_APP_MYEWALLET_URL)
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: process.env.REACT_APP_MYEWALLET_URL
  });
};

export default http;