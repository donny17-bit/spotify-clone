import { Button, Icon, HStack } from "@chakra-ui/react";
import querystring from "querystring";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action/auth";

function Guest() {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.auth);

  // const result = await dispatch(login(form, asA));
  // console.log(login);

  const loginBtn: Function = async () => {
    try {
      const result = await dispatch(login());
      console.log(result);

      // router.push(spotifyAuthUrl);
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
