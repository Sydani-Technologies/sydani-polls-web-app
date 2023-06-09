import axios from "axios";

  const session = JSON.parse(sessionStorage.getItem("session") as string);

  const API = axios.create({
    baseURL: "https://office.sydani.org/",
  });

  API.interceptors.request.use((req) => {
    if (session) {
      req.headers.Authorization = `token ${session?.message.api_key}:${session?.message.api_secret}`;
    }

    return req;
  });

  export const fetchEmployees = () =>
    API.get(`api/method/sydani.api.employees`);

  export const signIn = (loginData: { usr: string; pwd: string }) =>
    API.post("api/method/sydani.api.login", loginData);
