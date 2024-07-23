import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";

import { getUser } from "@/store/action/user";
import Navbar from "@/components/Navbar/navbar";
import Navigation from "@/components/Navigation/navigation";
import DefaultMainSection from "@/components/MainSection/guest";
import MainUser from "@/components/MainSection/mainUser";
import axios from "@/utils/axiosLocal";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(false); // check if user login or not
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState("20vw");
  const access_token = localStorage.getItem("access_token");

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

  const getUserProfile = async (access_token: string) => {
    await dispatch(getUser(access_token));
  };

  useEffect(() => {
    if (access_token) {
      setIsLogin(true);
      getUserProfile(access_token);
    } else {
      setIsLogin(false);
    }
  }, [access_token]);

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
          <Navbar isLogin={isLogin} width={width} />
          {/* divider */}
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
            {/* top navigation */}
            <Navigation isLogin={isLogin} />
            {/* main section */}
            {isLogin ? <MainUser /> : <DefaultMainSection />}
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
