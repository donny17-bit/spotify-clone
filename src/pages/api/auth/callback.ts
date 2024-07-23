import { NextApiRequest, NextApiResponse } from "next";
// import NextCors from "nextjs-cors";
import { useRouter } from "next/navigation";
import querystring from "querystring";
import axios from "@/utils/axiosSpotify";

type userAuthType = {
  redirect_uri: string;
  client_id: string;
  client_secret: string;
};

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

  const userAuth: userAuthType = {
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret,
  };

  if (method === "GET") {
    if (baseUrl === "/api/callback") {
      handleCallbackReq(userAuth, req, res);
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
  query: userAuthType,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client_id: string = query.client_id;
  const client_secret: string = query.client_secret;

  let code: string;
  if (typeof req.query.code === "string") {
    code = req.query.code; // Assign the string value directly
  } else if (Array.isArray(req.query.code)) {
    // If it's an array, take the first element as the value
    code = ""; // Use nullish coalescing operator to handle undefined
  } else {
    // If it's neither a string nor an array, assign a default value
    code = "";
  }

  const credentials = `${client_id}:${client_secret}`;

  const form = {
    code: code,
    redirect_uri: query.redirect_uri,
    grant_type: "authorization_code",
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
    },
  };

  const response = await axios.post("api/token", form, config);

  // res
  //   .status(200)
  //   .json({ data: response.data, message: "success login", status: 200 });
  res
    .redirect("/")
    .json({ data: response.data, message: "success login", status: 200 });
  // res.status(302).setHeader("Location", "http://127.0.0.1:3000/");

  // res.status(302).setHeader("Location", "http://127.0.0.1:3000/");

  // res
  //   .status(302)
  //   .setHeader(
  //     "Location",
  //     "http://127.0.0.1:3000/?" +
  //       querystring.stringify({
  //         user: data.access_token,
  //         refresh: data.refresh_token,
  //       })
  //   )
  res.end();
}
