import axios from "axios";

const API = axios.create({
  baseURL: "http://10.48.19.62:7085/operationsapi", //local
  //baseURL: "https://uat.ysraarogyasri.ap.gov.in/chatbot", //UAT
  //baseURL: "https://api-app.ysraarogyasri.ap.gov.in/chatbot", //PROD
});


API.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default API;
