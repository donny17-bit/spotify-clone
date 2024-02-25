import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  Link,
  Icon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import nextLink from "next/link";
import { FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <main className=" h-[100vh] w-[100vw] bg-black">
        <Grid
          templateAreas={`"nav main"`}
          // gridTemplateRows={"50px 1fr"}
          gridTemplateColumns={"25%"}
          h="100%"
          fontWeight="bold"
        >
          {/* navbar */}
          <GridItem p="2" bg="black" area={"nav"}>
            {/* Home */}
            <Box bg="#121212" p={5} color="white" borderRadius={"lg"}>
              <Link as={nextLink} href="#" _hover={{ textDecoration: "none" }}>
                <Text>
                  <Icon as={FaSpotify} boxSize={6} me={1} />
                  Spotify
                </Text>
              </Link>
              <Button
                variant={"link"}
                w="100%"
                my={4}
                _hover={{ textDecor: "none" }}
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
            <Box
              bg="#121212"
              p={5}
              color="white"
              // h="80%"
              borderRadius={"lg"}
              mt={2}
            >
              {/* Koleksi */}
              <HStack justify={"space-between"}>
                <Link
                  as={nextLink}
                  href="#"
                  _hover={{ textDecoration: "none" }}
                >
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
                  <Icon
                    as={FaPlus}
                    boxSize={4}
                    // _hover={{ color: "white" }}
                  />
                </Button>
              </HStack>
              {/* make first playlist */}
              <Box borderRadius="lg" bgColor={"#242424"} my="25px" p={4}>
                <Text color={"white"} fontWeight={"700"} fontSize={"16px"}>
                  Buat playlist pertamamu
                </Text>
                <Text
                  color={"white"}
                  fontWeight={"500"}
                  fontSize={"14px"}
                  mt={2}
                >
                  Caranya mudah, kami akan membantumu
                </Text>
                <Button
                  borderRadius={"full"}
                  mt={6}
                  py="9px"
                  px="15px"
                  size={"0"}
                  textColor={"black"}
                  fontWeight={"650"}
                  fontSize={"14px"}
                  _hover={{ bgColor: "#a19fa0", textColor: "white" }}
                >
                  Buat playlist
                </Button>
              </Box>
              {/* search podcast */}
              <Box borderRadius="lg" bgColor={"#242424"} mb={"120px"} p={4}>
                <Text color={"white"} fontWeight={"700"} fontSize={"16px"}>
                  Ayo cari beberapa podcast untuk diikuti
                </Text>
                <Text
                  color={"white"}
                  fontWeight={"500"}
                  fontSize={"14px"}
                  mt={2}
                >
                  Kami akan terus mengabarimu tentang episode baru
                </Text>
                <Button
                  borderRadius={"full"}
                  mt={6}
                  py="9px"
                  px="15px"
                  size={"0"}
                  textColor={"black"}
                  fontWeight={"650"}
                  fontSize={"14px"}
                  _hover={{ bgColor: "#a19fa0", textColor: "white" }}
                >
                  Jelajahi podcast
                </Button>
              </Box>
              {/* cookie and language */}
              <VStack align={"start"}>
                <Link
                  as={nextLink}
                  href="#"
                  color="#adacac"
                  fontWeight={"400"}
                  fontSize={"12px"}
                >
                  Cookie
                </Link>
                <Button
                  mt={5}
                  variant={"outline"}
                  color={"white"}
                  borderRadius={"full"}
                  size={"sm"}
                  borderColor={"#adacac"}
                  _hover={{ bgColor: "#616161", borderColor: "white" }}
                >
                  <Icon as={IoIosGlobe} boxSize={5} me={1} />
                  <Text fontWeight={"600"}>Bahasa Indonesia</Text>
                </Button>
              </VStack>
            </Box>
          </GridItem>
          {/* main */}
          <GridItem pt="2" pb="2" pe="2" bg="black" area={"main"}>
            {/* navigation */}
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
                >
                  Masuk
                </Button>
              </HStack>
            </HStack>
            {/* main section */}
            <Box
              h="92%"
              bgGradient="linear(to-b, #1E1E1E, #121212)"
              borderBottomRadius="lg"
            ></Box>
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
