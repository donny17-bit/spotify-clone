// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Api sample

import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.headers);
  try {
    res.redirect(302, "https://accounts.spotify.com/");
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch data" });
  }

  // try {
  //   await cors(req, res);
  //   console.log(req.headers);
  //   // res.status(200).json({ name: "John Doe" });

  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "Content-Type, Authorization"
  //   );
  // return res.redirect(
  //   "https://accounts.spotify.com/id/login?continue=https%3A%2F%2Faccounts.spotify.com%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3De529c8dfcf934586965b68bbd996f202%26redirect_uri%3Dhttp%253A%252F%252F127.0.0.1%253A3000%252Fapi%252Fcallback"
  // );

  //   res.end();
  // } catch (error) {
  //   console.log(error);
  // }

  // console.log(res.getHeaders());
  // res
  //   .status(302)
  //   .setHeader(
  //     "Location",
  //     "https://accounts.spotify.com/id/login?continue=https%3A%2F%2Faccounts.spotify.com%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3De529c8dfcf934586965b68bbd996f202%26redirect_uri%3Dhttp%253A%252F%252F127.0.0.1%253A3000%252Fapi%252Fcallback"
  //   );
  // .end();
}
