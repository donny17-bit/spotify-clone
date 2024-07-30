import type { NextApiRequest, NextApiResponse } from "next";
import axios from "@/utils/axiosApiSpotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { authorization } = req.headers;
  const { params, limit, offset } = req.query;

  if (method === "GET") {
    switch (params) {
      case "playlists":
        playlists(authorization, params, limit, offset, res);
        break;

      case "top-artists":
        topArtists(authorization, limit, offset, res);
        break;
      default:
        res.status(404).end("page not found");
        break;
    }
  } else {
    // Method not allowed
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function playlists(
  authorization: string | undefined,
  params: string,
  limit: string | string[] | undefined,
  offset: string | string[] | undefined,
  res: NextApiResponse
) {
  let url = `me/${params}`;
  if (limit !== undefined && offset !== undefined) {
    url = url + `?limit=${limit}&offset=${offset}`;
  } else if (limit !== undefined) {
    url = url + `?limit=${limit}`;
  } else if (offset !== undefined) {
    url = url + `?offset=${offset}`;
  }

  const result = await axios.get(url, {
    headers: {
      Authorization: `${authorization}`,
    },
  });
  res.json({
    data: result.data,
    message: "get user playlist success",
    status: 200,
  });
  res.end();
}

async function topArtists(
  authorization: string | undefined,
  limit: string | string[] | undefined,
  offset: string | string[] | undefined,
  res: NextApiResponse
) {
  let url = `me/top/artists?time_range=medium_term`;
  if (limit !== undefined && offset !== undefined) {
    url = url + `&limit=${limit}&offset=${offset}`;
  } else if (limit !== undefined) {
    url = url + `&limit=${limit}`;
  } else if (offset !== undefined) {
    url = url + `&offset=${offset}`;
  }

  const result = await axios.get(url, {
    headers: {
      Authorization: `${authorization}`,
    },
  });
  res.json({
    data: result.data,
    message: "success get user's top artist",
    status: 200,
  });
}
