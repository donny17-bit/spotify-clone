import {
  Box,
  Button,
  Text,
  Link,
  Icon,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";

import ListPlaylist from "../ListPlaylist";

type data = {
  main: number;
};

function UserNavbar(data: data) {
  return (
    <Box
      mt={5}
      h={data.main === 1 ? "73vh" : "68vh"}
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
    </Box>
  );
}

export default UserNavbar;
