import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { Grid, GridItem } from "@chakra-ui/react";
import nextLink from "next/link";

import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import DefaultMainSection from "@/components/MainSection/default";
import MainSection from "@/components/MainSection";

import querystring from "querystring";

export default function Home() {
  const router = useRouter();
  const [main, setMain] = useState(0);

  // use redux please
  const access_token: string = router.query.user;
  const refresh_token: string = router.query.refresh;

  useEffect(() => {
    console.log(main);

    // Check if running on the client-side
    if (typeof window !== "undefined") {
      // Use localStorage to set user data
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      setMain(1);
    }
  }, [access_token, refresh_token]);

  const [data, setData] = useState(null);

  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <main className=" h-[100vh] w-[100vw] bg-black">
        <Grid
          templateAreas={`"nav main"`}
          gridTemplateColumns={"25%"}
          h="100%"
          fontWeight="bold"
        >
          {/* left navbar */}
          <Navbar />
          {/* main */}
          <GridItem pt="2" pb="2" pe="2" bg="black" area={"main"}>
            {/* navigation */}
            <Navigation />
            {/* main section */}
            {main === 0 ? <DefaultMainSection /> : <MainSection />}
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
