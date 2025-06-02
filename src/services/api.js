import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"  // trocar pelo backend de Kauan e Fred
});

export default api;
