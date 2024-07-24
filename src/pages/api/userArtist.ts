import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import axios from "@/utils/axiosApiSpotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { authorization } = req.headers;
  const { limit, offset } = req.query;

  if (method === "GET") {
    const result = await axios.get(
      `me/top/artists?time_range=medium_term&limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `${authorization}`,
        },
      }
    );
    res.json({
      data: result.data,
      message: "success get user's top artist",
      status: 200,
    });
  } else {
    // Method not allowed
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
