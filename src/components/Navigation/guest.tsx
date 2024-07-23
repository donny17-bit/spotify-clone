import { Button, Icon, HStack, useEditable } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action/auth";
import { useEffect, useState } from "react";
import axios from "@/utils/axiosLocal";
import axiosSpotify from "@/utils/axiosSpotify";

function Guest() {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginState = useSelector((state: any) => state.auth);
  const { code } = router.query;

  const loginHandler = async (code: any) => {
    router.push("/");
    const result = await axios.get(`api/login?code=${code}`);
    localStorage.setItem("access_token", result.data.data.access_token);
    localStorage.setItem("refresh_token", result.data.data.refresh_token);
    router.push("/");
  };

  if (code !== undefined) {
    loginHandler(code);
  }

  const loginBtn = async () => {
    try {
      const result = await axios.get("/api/login");
      await dispatch(login());

      if (result.data.status == 302) {
        router.push(result.data.data.redirectUrl);
      }
    } catch (error) {
      console.error("Error to login", error);
    }
  };

  const daftarBtn = async () => {
    try {
      const result = await fetch("api/hello", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          origin: "localhost:3000/",
        },
      });
      // router.push("https://accounts.spotify.com/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HStack spacing={"8"}>
        <Button
          variant="link"
          color={"#A0A0A0"}
          _hover={{ textDecoration: "none", textColor: "blue" }}
          onClick={() => daftarBtn()}
        >
          Daftar
        </Button>
        <Button
          borderRadius={"full"}
          size={"md"}
          textColor={"black"}
          fontWeight={"650"}
          fontSize={"15px"}
          _hover={{ bgColor: "#a19fa0", textColor: "white" }}
          onClick={() => loginBtn()}
        >
          Masuk
        </Button>
      </HStack>
    </>
  );
}

export default Guest;
