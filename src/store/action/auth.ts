// import axios from "../../utils/axiosSpotify";
import axios from "@/utils/axiosLocal";

export function login() {
  return {
    type: "LOGIN",
    payload: axios.get("api/login"),
  };
}
