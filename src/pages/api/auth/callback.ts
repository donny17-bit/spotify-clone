import { NextApiRequest, NextApiResponse } from "next";
// import NextCors from "nextjs-cors";
import { useRouter } from "next/navigation";
import querystring from "querystring";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const client_id: string = "e529c8dfcf934586965b68bbd996f202";
  const client_secret: string = "f405192d372346619a2a4f631092ba90";
  const redirect_uri: string = "http://127.0.0.1:3000/api/callback";
  const baseUrl = req.url?.split("?")[0];
  // const router = useRouter();

  if (method === "GET") {
    if (baseUrl === "/api/callback") {
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

// callback
async function handleCallbackReq(
  query: any,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client_id: string = query.client_id;
  const client_secret: string = query.client_secret;

  const credentials = `${client_id}:${client_secret}`;

  const formData = new URLSearchParams();
  formData.append("code", req.query.code);
  formData.append("redirect_uri", query.redirect_uri);
  formData.append("grant_type", "authorization_code");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
    },
    body: formData.toString(),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });

  const data = response;

  // res.status(200).json({ data: data.access_token, message: "success" });
  res
    .status(302)
    .setHeader(
      "Location",
      "http://127.0.0.1:3000/?" +
        querystring.stringify({
          user: data.access_token,
          refresh: data.refresh_token,
        })
    )
    .end();
}
