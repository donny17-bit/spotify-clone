import {
  Box,
  Button,
  Text,
  Link,
  Icon,
  VStack,
  HStack,
  Image,
  Flex,
} from "@chakra-ui/react";

import ListPlaylist from "../ListPlaylist";

type data = {
  isLogin: boolean;
  height: number;
};

function UserNavbar(data: data) {
  return (
    <Flex
      flexDirection={"column"}
      mt={5}
      maxH={`${data.height}px`}
      _hover={{ overflowY: "auto" }}
      overflowY={"hidden"}
    >
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
      <ListPlaylist />
    </Flex>
  );
}

export default UserNavbar;
