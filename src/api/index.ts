import axios from "axios";

const API = axios.create({
  baseURL: "https://office.sydani.org/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("session")) {
    req.headers.Authorization = "token 286b4c0dbd0c141:d872638c901d607";
  }

  return req;
});

export const fetchEmployees = () => API.get(`/api/method/emp_email_list`);

export const signIn = (formData: any) => API.post("/user/signin", formData);
export const signUp = (formData: any) => API.post("/user/signup", formData);
