import { NextApiRequest, NextApiResponse } from "next";

type userAuthType = {
  redirect_uri: string;
  client_id: string;
  client_secret: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Enable CORS for all origins
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, DELETE, OPTIONS"
  // );
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const { method } = req;
  const client_id: string = "e529c8dfcf934586965b68bbd996f202";
  const client_secret: string = "f405192d372346619a2a4f631092ba90";
  const redirect_uri: string = "http://127.0.0.1:3000/api/callback";
  const baseUrl = req.url?.split("?")[0];

  const userAuth: userAuthType = {
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret,
  };

  if (method === "GET") {
    if (baseUrl === "/api/refresh-token") {
      handleRefreshTokenReq(userAuth, req, res);
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

async function handleRefreshTokenReq(
  query: userAuthType,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url: string = "https://accounts.spotify.com/api/token";
  const client_id: string = query.client_id;
  const client_secret: string = query.client_secret;

  let refresh_token: string;
  if (typeof req.query.refresh_token === "string") {
    refresh_token = req.query.refresh_token; // Assign the string value directly
  } else if (Array.isArray(req.query.refresh_token)) {
    // If it's an array, take the first element as the value
    refresh_token = ""; // Use nullish coalescing operator to handle undefined
  } else {
    // If it's neither a string nor an array, assign a default value
    refresh_token = "";
  }

  const credentials = `${client_id}:${client_secret}`;

  const formData = new URLSearchParams();
  formData.append("grant_type", "refresh_token");
  formData.append("refresh_token", refresh_token);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    res
      .status(200)
      .json({ message: "success get api", data: data, status: 200 });
  } catch (error) {
    console.log(error);
    console.error("There was a problem with the request:");
    res.status(400).json({ message: "Failed get api", data: {}, status: 400 });
  }
}
