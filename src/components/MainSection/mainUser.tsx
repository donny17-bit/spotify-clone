import {
  Box,
  Grid,
  GridItem,
  Link,
  Text,
  Flex,
  Button,
  Icon,
  Divider,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Playlist from "./playlists";
import { getUserTopArtist, getFeaturedPlaylist } from "@/store/action/user";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function MainUser() {
  const userState = useSelector((state: any) => state.user);
  const userArtistState = useSelector((state: any) => state.userArtist);
  const featuredPlaylistState = useSelector(
    (state: any) => state.featuredPlaylist
  );

  const topArtist = userArtistState.data.items;
  const featuredPlaylist = featuredPlaylistState.data.playlists.items;

  const dispatch = useDispatch();
  const router = useRouter();
  const displayName = userState.data.display_name;
  const access_token = localStorage.getItem("access_token");

  const featured = async (access_token: string) => {
    await dispatch(getFeaturedPlaylist(access_token, 6, 0, "id_ID"));
  };

  const user = async (access_token: string) => {
    await dispatch(getUserTopArtist(access_token, 6, 0));
  };

  useEffect(() => {
    if (access_token) {
      user(access_token);
      featured(access_token);
      router.push("/");
    }
  }, []);

  return (
    <Box
      maxH="90vh"
      bgGradient="linear(to-b, #1E1E1E, #121212)"
      borderBottomRadius="lg"
      px={6}
      overflowY={"auto"}
    >
      {topArtist === undefined ? (
        <> </>
      ) : (
        <Playlist
          title={`${displayName}'s Top Artist`}
          py={4}
          data={topArtist}
        />
      )}

      {featuredPlaylist === undefined ? (
        <></>
      ) : (
        <Playlist
          title="Hit terpopuler hari ini"
          py={5}
          data={featuredPlaylist}
        />
      )}

      {/* footer */}
      <Flex pt={"100px"} flexDirection={{ base: "column", xl: "row" }}>
        <Grid
          flex={3}
          templateColumns={{
            base: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={10}
        >
          {/* other product link*/}
          <GridItem>
            <Text textColor={"white"} fontSize={17}>
              Company
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                About
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Jobs
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                For the Record
              </Link>
            </Text>
          </GridItem>
          <GridItem>
            <Text textColor={"white"} fontSize={17}>
              Communities
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                For Artists
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Developers
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Advertising
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Investors
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Vendors
              </Link>
            </Text>
          </GridItem>
          <GridItem>
            <Text textColor={"white"} fontSize={17}>
              Useful links
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Support
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Free Mobile App
              </Link>
            </Text>
          </GridItem>
          <GridItem>
            <Text textColor={"white"} fontSize={17}>
              Spotify Plans
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Premium Individual
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Premium Duo
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Premium Family
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Premium Student
              </Link>
            </Text>
            <Text
              pt={2}
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={15}
              _hover={{ color: "white" }}
            >
              <Link as={NextLink} href="/">
                Spotify Free
              </Link>
            </Text>
          </GridItem>
        </Grid>

        {/* media social button */}
        <Flex
          flex={1}
          flexDir={"column"}
          align={{ base: "start", xl: "end" }}
          pt={{ base: "50px", xl: "0px" }}
        >
          <Box>
            <Button
              borderRadius={"full"}
              p="2"
              bgColor={"#282828"}
              textColor={"#A0A0A0"}
              _hover={{ bgColor: "#8a8787", textColor: "white" }}
            >
              <Icon as={FaInstagram} boxSize={4} />
            </Button>
            <Button
              borderRadius={"full"}
              p="2"
              mx={"20px"}
              bgColor={"#282828"}
              textColor={"#A0A0A0"}
              _hover={{ bgColor: "#8a8787", textColor: "white" }}
            >
              <Icon as={FaTwitter} boxSize={4} />
            </Button>
            <Button
              borderRadius={"full"}
              p="2"
              bgColor={"#282828"}
              textColor={"#A0A0A0"}
              _hover={{ bgColor: "#8a8787", textColor: "white" }}
            >
              <Icon as={FaFacebook} boxSize={4} />
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Divider my={10} />

      {/* etc link */}
      <Flex pb={"100px"} flexDirection={{ base: "column", xl: "row" }}>
        <Wrap textColor={"white"} spacing={"10px"}>
          <WrapItem>
            <Link
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={14}
              _hover={{ color: "white" }}
              as={NextLink}
              href="/"
            >
              Legal
            </Link>
          </WrapItem>
          <WrapItem>
            <Link
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={14}
              _hover={{ color: "white" }}
              as={NextLink}
              href="/"
            >
              Safety & Privacy Center
            </Link>
          </WrapItem>
          <WrapItem>
            <Link
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={14}
              _hover={{ color: "white" }}
              as={NextLink}
              href="/"
            >
              Privacy Policy
            </Link>
          </WrapItem>
          <WrapItem>
            <Link
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={14}
              _hover={{ color: "white" }}
              as={NextLink}
              href="/"
            >
              Cookies
            </Link>
          </WrapItem>
          <WrapItem>
            <Link
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={14}
              _hover={{ color: "white" }}
              as={NextLink}
              href="/"
            >
              About Ads
            </Link>
          </WrapItem>
          <WrapItem>
            <Link
              color={"#A7A7A7"}
              fontWeight={600}
              fontSize={14}
              _hover={{ color: "white" }}
              as={NextLink}
              href="/"
            >
              Accessibility
            </Link>
          </WrapItem>
        </Wrap>
        <Spacer />
        {/* </SimpleGrid> */}
        <Text
          color={"#A7A7A7"}
          fontWeight={600}
          fontSize={14}
          pt={{ base: "10px", xl: "0px" }}
        >
          © 2024 Spotify AB
        </Text>
      </Flex>
    </Box>
  );
}

export default MainUser;
