import { Button, Icon, HStack } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import User from "./user";
import Guest from "./guest";

type data = {
  isLogin: boolean;
};

function Navigation(data: data) {
  return (
    <HStack
      justify={"space-between"}
      h="8%"
      bg={data.isLogin ? "#1E1E1E" : "#121212"}
      // {data.login === 1 ? {bg='#1E1E1E'} : {bg="#121212"}}
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
      {data.isLogin ? <User /> : <Guest />}
    </HStack>
  );
}

export default Navigation;
