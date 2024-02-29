import { Button, Icon, HStack } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import querystring from "querystring";
import { useRouter } from "next/router";

function Navigation() {
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

  async function loginHandler() {
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
  }

  return (
    <HStack
      justify={"space-between"}
      h="8%"
      bg="#121212"
      borderTopRadius="lg"
      px={8}
    >
      <HStack>
        <Button
          borderRadius={"full"}
          size={"0"}
          p="1"
          bgColor={"#0A0A0A"}
          textColor={"#A0A0A0"}
          _hover={{ bgColor: "#8a8787", textColor: "white" }}
        >
          <Icon as={IoIosArrowBack} boxSize={6} />
        </Button>
        <Button
          borderRadius={"full"}
          size={"0"}
          p="1"
          bgColor={"#0A0A0A"}
          textColor={"#A0A0A0"}
          _hover={{ bgColor: "#8a8787", textColor: "white" }}
        >
          <Icon as={IoIosArrowForward} boxSize={6} />
        </Button>
      </HStack>
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
    </HStack>
  );
}

export default Navigation;
