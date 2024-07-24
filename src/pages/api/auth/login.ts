import { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";
import axios from "../../../utils/axiosSpotify";
import { redirect } from "next/navigation";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const client_id: string = "e529c8dfcf934586965b68bbd996f202";
  const client_secret: string = "f405192d372346619a2a4f631092ba90";
  const redirect_uri: string = "http://127.0.0.1:3000/";
  const scope = "user-read-private user-read-email user-top-read";
  const baseUrl = req.url?.split("?")[0];
  const code = req.query.code;

  if (method === "GET") {
    if (baseUrl === "/api/login" && code === undefined) {
      // Handle GET request for the login route
      handleLoginReq({ client_id, redirect_uri, scope }, res);
    } else if (code !== undefined) {
      handleCallback({ code, client_id, client_secret, redirect_uri }, res);
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

async function handleCallback(query: any, res: NextApiResponse) {
  const credentials = `${query.client_id}:${query.client_secret}`;

  const config = {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
    },
  };

  const form = {
    code: query.code,
    redirect_uri: query.redirect_uri,
    grant_type: "authorization_code",
  };

  const response = await axios.post("api/token", form, config);
  res.json({ data: response.data, message: "success login", status: 200 });
  res.end();
}

async function handleLoginReq(query: any, res: NextApiResponse) {
  const queryParam = querystring.stringify({
    response_type: "code",
    client_id: query.client_id as string,
    scope: query.scope as string,
    redirect_uri: query.redirect_uri as string,
  });

  const response = await axios.get("authorize?" + queryParam);
  const redirectUrl = response.request.res.responseUrl;

  res.json({
    status: 302,
    // data: { redirect: "https://accounts.spotify.com/authorize?" + queryParam },
    data: { redirectUrl: redirectUrl },
    message: "redirect to spotify login page",
  });
  res.end();
}
