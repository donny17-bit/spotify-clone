import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  Link,
  Icon,
  HStack,
  Flex,
} from "@chakra-ui/react";
import nextLink from "next/link";
import { FaSpotify } from "react-icons/fa";
import { GoHome, GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import Guest from "./guest";
import UserNavbar from "./user";
import { useRouter } from "next/router";
import ListPlaylist from "../ListPlaylist";
import { useRef, useEffect, useState } from "react";

type data = {
  isLogin: boolean;
  width: string;
};

function Navbar(data: data) {
  const router = useRouter();
  const ref = useRef(null);
  const [currentH, setCurrentH] = useState(0);

  const handleResize = (entries: any) => {
    for (let entry of entries) {
      if (entry.target === ref.current) {
        setCurrentH(entry.contentRect.height - 100);
      }
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Flex
      ps="2"
      pb="2"
      pt="2"
      bg="black"
      flexDirection={"column"}
      w={data.width}
    >
      {/* Home */}
      <Box bg="#121212" p={5} color="white" borderRadius={"lg"}>
        {data.isLogin ? (
          <></>
        ) : (
          <Link as={nextLink} href="/" _hover={{ textDecoration: "none" }}>
            <Text>
              <Icon as={FaSpotify} boxSize={6} me={1} />
              Spotify
            </Text>
          </Link>
        )}

        {/* home button */}
        <Button
          variant={"link"}
          w="100%"
          mt={data.isLogin ? 0 : 4}
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
            <Icon as={GoHomeFill} boxSize={7} me={5} />
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
      {/* collection */}
      <Flex
        ref={ref}
        flexDirection={"column"}
        bg="#121212"
        color="white"
        borderRadius={"lg"}
        mt={2}
        flex={"1"}
      >
        {/* collection */}
        <HStack justify={"space-between"} px={5} pt={5}>
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
        <Box px={3} pb={5}>
          {data.isLogin ? (
            <UserNavbar isLogin={data.isLogin} height={currentH} />
          ) : (
            <Guest />
          )}
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
