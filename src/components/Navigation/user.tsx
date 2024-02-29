import { Button, Icon, HStack, fadeConfig } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { Image } from "@chakra-ui/react";

function User() {
  return (
    <>
      <HStack spacing={"2"}>
        <Button
          borderRadius={"full"}
          size={"0"}
          p="2"
          bgColor={"#0A0A0A"}
          textColor={"#A0A0A0"}
          _hover={{ bgColor: "#8a8787", textColor: "white" }}
        >
          <Icon as={FaRegBell} boxSize={4} />
        </Button>
        <Button
          borderRadius={"full"}
          size={"0"}
          p="1"
          bgColor={"#0A0A0A"}
          textColor={"#A0A0A0"}
          _hover={{ bgColor: "#8a8787", textColor: "white" }}
        >
          {/* <Icon as={IoIosArrowBack} boxSize={4} /> */}
          <Image
            src="/cover/spotify-cover-1.png"
            alt="First-love-img"
            borderRadius={"full"}
            w={6}
          />
        </Button>
      </HStack>
    </>
  );
}

export default User;
