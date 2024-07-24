import axios from "@/utils/axiosLocal";

export function getUser(access_token: string) {
  return {
    type: "USER",
    payload: axios.get("api/user", {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
  };
}

export function getUserTopArtist(
  access_token: string,
  limit: number,
  offset: number
) {
  return {
    type: "USERARTIST",
    payload: axios.get(`api/userArtist?limit=${limit}&offset=${offset}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
  };
}
