import {
  Box,
  Grid,
  GridItem,
  Text,
  Link,
  HStack,
  CardBody,
  Stack,
  Heading,
  Card,
  Image,
} from "@chakra-ui/react";
import nextLink from "next/link";
import Playlist from "./playlists";

function MainSection() {
  return (
    <Box
      maxH="90vh"
      bgGradient="linear(to-b, #1E1E1E, #121212)"
      borderBottomRadius="lg"
      px={6}
      overflowY={"auto"}
      //   overflowWrap={"anywhere"}
      //   overflow={"scroll"}
    >
      <Playlist title="Dibuat untuk __name__" py={4} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
    </Box>
  );
}

export default MainSection;
