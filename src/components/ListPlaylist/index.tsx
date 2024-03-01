import { Box, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import nextLink from "next/link";

function ListPlaylist() {
  return (
    <Box _hover={{ bgColor: "#232323" }} p={2} borderRadius={"lg"}>
      <Link as={nextLink} href="#" _hover={{ textAtribute: "none" }}>
        <HStack>
          <Image
            src="/cover/spotify-cover-2.png"
            alt="playlist-cover"
            w={50}
            borderRadius={"lg"}
          />
          <VStack gap={0} align={"start"}>
            <Text>Fresh Till Death!</Text>
            <Text fontSize={13} textAlign={"left"} textColor={"#A2A2A2"}>
              Playlist | Spotify
            </Text>
          </VStack>
        </HStack>
      </Link>
    </Box>
  );
}

export default ListPlaylist;
