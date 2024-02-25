import { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const client_id: string = "e529c8dfcf934586965b68bbd996f202";
  const client_secret: string = "f405192d372346619a2a4f631092ba90";
  const redirect_uri: string = "http://127.0.0.1:3000/api/callback";
  const baseUrl = req.url?.split("?")[0];

  if (method === "GET") {
    if (baseUrl === "/api/login") {
      // Handle GET request for the login route
      handleLoginReq({ client_id, redirect_uri }, res);
    } else if (baseUrl === "/api/callback") {
      handleCallbackReq(
        {
          redirect_uri: redirect_uri,
          client_id: client_id,
          client_secret: client_secret,
        },
        req,
        res
      );
    } else {
      // Unknown route
      res.status(404).json({ message: "Route not found" });
    }
  } else if (method === "POST") {
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

function handleCallbackReq(
  query: any,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client_id: string = query.client_id;
  const client_secret: string = query.client_secret;

  const credentials = `${client_id}:${client_secret}`;

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: req.query.code,
      redirect_uri: query.redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
    },
  };

  // kurang bikin post method buat callbacknya

  // Set the status code to 302 Found
  res.status(200).json({ message: "sukses" });
}
