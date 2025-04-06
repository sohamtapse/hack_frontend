// utils/Axios.js or services/Axios.js

import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://fc28-103-249-89-199.ngrok-free.app", // replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // set true if using cookies/sessions
});
