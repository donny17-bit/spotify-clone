import axios from "@/utils/axiosLocal";

export function getUser(access_token: string) {
  return {
    type: "USER",
    payload: axios.get("api/me", {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
  };
}

export function getUserPlaylists(
  access_token: string,
  limit: number,
  offset: number
) {
  return {
    type: "USERPLAYLIST",
    payload: axios.get(`api/me/playlists?limit=${limit}&offset=${offset}`, {
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
    payload: axios.get(`api/me/top-artists?limit=${limit}&offset=${offset}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
  };
}

export function getFeaturedPlaylist(
  access_token: string,
  limit: number,
  offset: number,
  locale: string
) {
  return {
    type: "FEATURED",
    payload: axios.get(
      `api/featuredPlaylist?locale=${locale}&limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    ),
  };
}
