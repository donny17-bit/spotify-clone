// import axios from "../../utils/axiosSpotify";
import axios from "@/utils/axiosLocal";

export function login() {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return {
    type: "LOGIN",
    // payload: fetch("api/login", config),
    // payload: axios.request(config),
    payload: axios.get("api/login"),
    // data: {},
  };
}
