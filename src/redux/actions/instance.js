import axios from "axios";

const instance = axios.create({
  baseURL: "http://mmrg98.pythonanywhere.com/", 
}); 
// http://127.0.0.1:8000/

export default instance;
