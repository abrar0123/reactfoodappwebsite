// axiosInstance.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.example.com", // Set your base URL here
  timeout: 5000, // Set request timeout (optional)
  headers: {
    "Content-Type": "application/json",
    // You can add other common headers here
  },
});

// Add a request interceptor
//  before sent req, we intercept req and add auth token (session managemnt , cookies etc ) from local storage ,
// and add into req header

instance.interceptors.request.use(
  (config) => {
    // Get the authentication token from local storage or other sources
    const authToken = localStorage.getItem("authToken");

    // Set the authentication token in the request headers
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// after get resp , we intercept incoming response
instance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
