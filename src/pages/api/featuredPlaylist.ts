import type { NextApiRequest, NextApiResponse } from "next";
import axios from "@/utils/axiosApiSpotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { authorization } = req.headers;
  const { limit, offset, locale } = req.query;

  if (method === "GET") {
    const result = await axios.get(
      `browse/featured-playlists?locale=${locale}&limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `${authorization}`,
        },
      }
    );
    res.json({
      data: result.data,
      message: "success get featured playlist",
      status: 200,
    });
  } else {
    // Method not allowed
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
