import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
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
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Card,
  Image,
} from "@chakra-ui/react";
import nextLink from "next/link";
import { FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import querystring from "querystring";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);

  const loginBtn: Function = () => {
    loginHandler();
  };

  async function loginHandler() {
    const client_id: string = "e529c8dfcf934586965b68bbd996f202";
    const redirect_uri: string = "http://127.0.0.1:3000/api/callback";
    // const redirect_uri: string = "http://127.0.0.1:3000/home";

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
                  onClick={() => loginBtn()}
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
              px={6}
            >
              <HStack justify={"space-between"} py={3}>
                <Link as={nextLink} textColor={"white"} href="#" fontSize={25}>
                  Playlist Spotify
                </Link>
                <Link
                  as={nextLink}
                  textColor={"#ABABAB"}
                  href="#"
                  fontSize={14}
                >
                  Tampilkan semua
                </Link>
              </HStack>
              <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                <GridItem w="100%">
                  <Link as={nextLink} href="#">
                    <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
                      <CardBody p={3}>
                        <Image
                          src="/cover/spotify-cover-1.png"
                          alt="First-love-img"
                          borderRadius={"lg"}
                        />
                        <Stack mt="3">
                          <Heading fontSize={17} color={"white"}>
                            First Love
                          </Heading>
                          <Text color={"#bfbdbd"} fontSize={13}>
                            Embark on a soul-stirring journey through the
                            ench...
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Link>
                </GridItem>
                <GridItem w="100%">
                  <Link as={nextLink} href="#">
                    <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
                      <CardBody p={3}>
                        <Image
                          src="/cover/spotify-cover-4.png"
                          alt="down-in-the-ville-img"
                          borderRadius={"lg"}
                        />
                        <Stack mt="3">
                          <Heading fontSize={17} color={"white"}>
                            Rap Realms
                          </Heading>
                          <Text color={"#bfbdbd"} fontSize={13}>
                            Dive into our Spotify rap playlist, Where beats
                            bump....
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Link>
                </GridItem>
                <GridItem w="100%">
                  <Link as={nextLink} href="#">
                    <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
                      <CardBody p={3}>
                        <Image
                          src="/cover/spotify-cover-8.png"
                          alt="Study-Struggle-img"
                          borderRadius={"lg"}
                        />
                        <Stack mt="3">
                          <Heading fontSize={17} color={"white"}>
                            Study Struggle
                          </Heading>
                          <Text color={"#bfbdbd"} fontSize={13}>
                            Pop Pleasures: Tune into the Catchiest Hits!
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Link>
                </GridItem>
                <GridItem w="100%">
                  <Link as={nextLink} href="#">
                    <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
                      <CardBody p={3}>
                        <Image
                          src="/cover/spotify-cover-3.png"
                          alt="Techno-anthem-img"
                          borderRadius={"lg"}
                        />
                        <Stack mt="3">
                          <Heading fontSize={17} color={"white"}>
                            Techno Anthem
                          </Heading>
                          <Text color={"#bfbdbd"} fontSize={13}>
                            Experience the ultimate Techno thrill with our
                            playlist
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Link>
                </GridItem>
                <GridItem w="100%">
                  <Link as={nextLink} href="#">
                    <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
                      <CardBody p={3}>
                        <Image
                          src="/cover/spotify-cover-6.png"
                          alt="rnb-90-img"
                          borderRadius={"lg"}
                        />
                        <Stack mt="3">
                          <Heading fontSize={17} color={"white"}>
                            90's RnB
                          </Heading>
                          <Text color={"#bfbdbd"} fontSize={13}>
                            Step back into the smooth of the 90s with our R&B
                            playlist
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Link>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
