import axios from "axios";
import { log } from "console";
import Cookies from "js-cookie";

const axiosApiInstance = axios.create({
  //   baseURL: process.env.URL_BACKEND,
  // baseURL: "/",
  baseURL: "https://accounts.spotify.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  },
});

// axiosApiInstance.request(config);

// Add a request interceptor
// axiosApiInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     // config.headers.set(
//     //   "Authorization",
//     //   `Bearer ${Cookies.get("access_token")}`,
//     // );

//     config.headers.set("Access-Control-Allow-Origin", "*");
//     config.headers.set(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, OPTIONS"
//     );
//     config.headers.set(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );

//     // config.headers = {
//     //   Authorization: `Bearer ${Cookies.get("token")}`,
//     // };
//     console.log(config);
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
axiosApiInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // response.headers.set("Access-Control-Allow-Origin", "*");
    // console.log(response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response.status === 403) {
    //   if (error.response.data.msg !== "jwt expired") {
    //     // Cookies.remove("token");
    //     // Cookies.remove("refreshToken");
    //     window.location.href = "/auth/login";
    //   } else {
    //     const refreshToken = Cookies.get("refreshToken");
    //     axiosApiInstance
    //       .post("/auth/user/refresh", { refreshToken })
    //       .then((res) => {
    //         Cookies.set("token", res.data.data.token);
    //         Cookies.set("refreshToken", res.data.data.refreshToken);
    //         window.location.reload();
    //       })
    //       .catch(() => {
    //         Cookies.remove("token");
    //         Cookies.remove("refreshToken");
    //         window.location.href = "/auth/login";
    //       });
    //   }
    // }

    console.log("error in axios spotify");
    // console.log(error);
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
