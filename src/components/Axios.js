// utils/Axios.js or services/Axios.js

import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://cc17-103-249-89-165.ngrok-free.app", // replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // set true if using cookies/sessions
});
