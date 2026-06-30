import axios from "axios";

const client = axios.create({
  baseURL: "https://worksmart-backend.onrender.com/api",
});

export default client;
