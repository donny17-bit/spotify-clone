import axios from "@/utils/axiosLocal";

export function getUser(access_token: string) {
  return {
    type: "USER",
    payload: axios.get("api/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }),
  };
}
