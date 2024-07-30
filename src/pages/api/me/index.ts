import type { NextApiRequest, NextApiResponse } from "next";
import axios from "@/utils/axiosApiSpotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { authorization } = req.headers;

  if (method === "GET") {
    const result = await axios.get("me", {
      headers: {
        Authorization: `${authorization}`,
      },
    });
    res.json({
      data: result.data,
      message: "get user profile success",
      status: 200,
    });
    res.end();
  } else {
    // Method not allowed
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
