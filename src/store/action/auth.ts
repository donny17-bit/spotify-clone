import axios from "../../utils/axiosSpotify";

export function login() {
  return {
    type: "LOGIN",
    payload: fetch("api/login"),
    // payload: axios.get("api/login"),
    // data: {},
  };
}
