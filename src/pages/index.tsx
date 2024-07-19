import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import nextLink from "next/link";

import Navbar from "@/components/Navbar/navbar";
import Navigation from "@/components/Navigation";
import DefaultMainSection from "@/components/MainSection/guest";
import MainSection from "@/components/MainSection/user";

import querystring from "querystring";

export default function Home() {
  const router = useRouter();
  const [main, setMain] = useState(0); // check if user login or not
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState("20vw");

  // use redux please

  let access_token: string;
  if (typeof router.query.user === "string") {
    access_token = router.query.user; // Assign the string value directly
  } else if (Array.isArray(router.query.user)) {
    // If it's an array, take the first element as the value
    access_token = ""; // Use nullish coalescing operator to handle undefined
  } else {
    // If it's neither a string nor an array, assign a default value
    access_token = "";
  }

  let refresh_token: string;
  if (typeof router.query.refresh === "string") {
    refresh_token = router.query.refresh; // Assign the string value directly
  } else if (Array.isArray(router.query.refresh)) {
    // If it's an array, take the first element as the value
    refresh_token = ""; // Use nullish coalescing operator to handle undefined
  } else {
    // If it's neither a string nor an array, assign a default value
    refresh_token = "";
  }

  const dividerDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const dividerUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsResizing(false);
  };

  const dividerMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (!isResizing) {
      return;
    }

    console.log(e.clientX);
    const minWidth = 0.15 * window.outerWidth;
    const maxWidth = 0.5 * window.innerWidth;

    if (e.clientX < minWidth) {
      setWidth(`${minWidth}px`);
    } else if (e.clientX > maxWidth) {
      setWidth(`${maxWidth}px`);
    } else {
      setWidth(`${e.clientX}px`);
    }
  };

  useEffect(() => {
    // Check if running on the client-side
    if (typeof window !== undefined) {
      if (access_token != undefined) {
        localStorage.setItem("access_token", access_token);
        setMain(1);
      }
      if (access_token != undefined) {
        localStorage.setItem("refresh_token", refresh_token);
        setMain(1);
      }
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
          templateAreas={`"nav divider main"`}
          // maxH="100vh"
          h="95vh"
          fontWeight="bold"
          onMouseMove={(e) => dividerMove(e)}
        >
          {/* left navbar */}
          <Navbar main={main} width={width} />
          <GridItem
            pt="4"
            px="1"
            h={"98vh"}
            pb="1"
            area={"divider"}
            opacity={"0"}
            resize={"horizontal"}
            _hover={{ cursor: "ew-resize", opacity: "1" }}
            onMouseDown={(e) => dividerDown(e)}
            onMouseUp={(e) => dividerUp(e)}
          >
            <Divider orientation="vertical" />
          </GridItem>
          {/* main */}
          <GridItem pt="2" pb="2" pe="2" bg="black" area={"main"}>
            {/* navigation */}
            <Navigation login={main} />
            {/* main section */}
            {main === 0 ? <DefaultMainSection /> : <MainSection />}
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
