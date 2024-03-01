import {
  Box,
  Button,
  GridItem,
  Text,
  Link,
  Icon,
  HStack,
} from "@chakra-ui/react";

import nextLink from "next/link";
import { FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import Guest from "./guest";
import UserNavbar from "./user";

type data = {
  main: number;
};

function Navbar(data: data) {
  return (
    <GridItem p="2" bg="black" area={"nav"}>
      {/* Home */}
      <Box bg="#121212" p={5} color="white" borderRadius={"lg"}>
        {data.main === 1 ? (
          <></>
        ) : (
          <Link as={nextLink} href="/" _hover={{ textDecoration: "none" }}>
            <Text>
              <Icon as={FaSpotify} boxSize={6} me={1} />
              Spotify
            </Text>
          </Link>
        )}

        <Button
          variant={"link"}
          w="100%"
          mt={data.main === 1 ? 0 : 4}
          mb={4}
          _hover={{ textDecor: "none" }}
          as={nextLink}
          href="/"
        >
          <Text
            textAlign={"left"}
            w="100%"
            color={"#A7A7A7"}
            fontWeight={700}
            fontSize={16}
            _hover={{ color: "white" }}
          >
            <Icon as={GoHome} boxSize={7} me={5} />
            Home
          </Text>
        </Button>
        <Button variant={"link"} w="100%" _hover={{ textDecor: "none" }}>
          <Text
            textAlign={"left"}
            w="100%"
            color={"#A7A7A7"}
            fontWeight={700}
            fontSize={16}
            _hover={{ color: "white" }}
          >
            <Icon as={CiSearch} boxSize={7} me={5} />
            Cari
          </Text>
        </Button>
      </Box>
      {/* koleksi */}
      <Box bg="#121212" p={5} color="white" borderRadius={"lg"} mt={2}>
        {/* Koleksi */}
        <HStack justify={"space-between"}>
          <Link as={nextLink} href="#" _hover={{ textDecoration: "none" }}>
            <HStack _hover={{ color: "white" }} color={"#A7A7A7"}>
              <Icon as={VscLibrary} boxSize={6} me={2} />
              <Text fontWeight={700} fontSize={16}>
                Koleksi Kamu
              </Text>
            </HStack>
          </Link>
          <Button
            size={"xs"}
            borderRadius={"full"}
            p="0px"
            variant={"ghost"}
            textColor={"#A7A7A7"}
            _hover={{ bgColor: "#242424", textColor: "white" }}
          >
            <Icon as={FaPlus} boxSize={4} />
          </Button>
        </HStack>
        {data.main === 1 ? <UserNavbar main={data.main} /> : <Guest />}
      </Box>
    </GridItem>
  );
}

export default Navbar;
