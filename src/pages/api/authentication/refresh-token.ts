import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const client_id: string = "e529c8dfcf934586965b68bbd996f202";
  const client_secret: string = "f405192d372346619a2a4f631092ba90";
  const redirect_uri: string = "http://127.0.0.1:3000/api/callback";
  const baseUrl = req.url?.split("?")[0];

  if (method === "GET") {
    if (baseUrl === "/api/refresh-token") {
      handleRefreshTokenReq(
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
  query: any,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url: string = "https://accounts.spotify.com/api/token";
  const client_id: string = query.client_id;
  const client_secret: string = query.client_secret;

  const credentials = `${client_id}:${client_secret}`;

  const formData = new URLSearchParams();
  formData.append("grant_type", "refresh_token");
  formData.append("refresh_token", req.query.refresh_token);

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
