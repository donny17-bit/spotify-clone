import { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const client_id: string = "e529c8dfcf934586965b68bbd996f202";
  const redirect_uri: string = "http://127.0.0.1:3000/api/callback";
  const baseUrl = req.url?.split("?")[0];

  if (method === "GET") {
    if (baseUrl === "/api/login") {
      // Handle GET request for the login route
      handleLoginReq({ client_id, redirect_uri }, res);
    } else {
      // Unknown route
      res
        .status(404)
        .json({ message: "Failed route not found", data: {}, status: 400 });
    }
  } else {
    // Method not allowed
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function handleLoginReq(query: any, res: NextApiResponse) {
  const spotifyAuthUrl =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: query.client_id as string,
      redirect_uri: query.redirect_uri as string,
    });

  // Set the status code to 302 Found
  res.status(302).setHeader("Location", spotifyAuthUrl).end();
}
