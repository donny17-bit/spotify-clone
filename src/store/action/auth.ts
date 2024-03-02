import axios from "../../utils/axios";

export const login = (form: any) => {
  return {
    type: "LOGIN",
    payload: axios.post(`/auth/user/login`, form),
    // data: form,
  };
};
