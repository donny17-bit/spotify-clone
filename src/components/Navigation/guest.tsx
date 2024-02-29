import { Button, Icon, HStack } from "@chakra-ui/react";
import querystring from "querystring";
import { useRouter } from "next/router";

function Guest() {
  const router = useRouter();

  const loginBtn: Function = async () => {
    const client_id: string = "e529c8dfcf934586965b68bbd996f202";
    const redirect_uri: string = "http://127.0.0.1:3000/api/callback";

    const spotifyAuthUrl =
      "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id as string,
        redirect_uri: redirect_uri as string,
      });

    try {
      router.push(spotifyAuthUrl);
    } catch (error) {
      console.error("Error to login", error);
    }
  };

  return (
    <>
      <HStack spacing={"8"}>
        <Button
          variant="link"
          color={"#A0A0A0"}
          _hover={{ textDecoration: "none", textColor: "white" }}
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
