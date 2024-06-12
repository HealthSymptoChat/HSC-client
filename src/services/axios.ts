import axios from "axios";

const baseURL = "https://hsc-sever.vercel.app/api/v1";

const authAxios = axios.create({
  baseURL: baseURL,
});

const publicAxios = axios.create({
  baseURL: baseURL,
});

authAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      // call refresh token
      originalRequest._retry = true;
      return axios
        .post(baseURL + "/auth/token", {
          refreshToken: localStorage.getItem("refreshToken"),
        })
        .then((res) => {
          if (res.data.message === "success") {
            localStorage.setItem("accessToken", res.data.data);
            originalRequest.headers.Authorization = `Bearer ${res.data.data}`;
            return authAxios(originalRequest);
          }
        })
        .catch((error) => {
          console.log("error in refresh token", error);
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export { authAxios, publicAxios };
