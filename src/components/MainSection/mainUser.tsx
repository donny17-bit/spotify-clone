import { Box } from "@chakra-ui/react";
import nextLink from "next/link";
import Playlist from "./playlists";

import { useDispatch, useSelector } from "react-redux";

function MainUser() {
  const userState = useSelector((state: any) => state.user);
  const displayName = userState.data.display_name;

  return (
    <Box
      maxH="90vh"
      bgGradient="linear(to-b, #1E1E1E, #121212)"
      borderBottomRadius="lg"
      px={6}
      // _hover={{ overflowY: "auto" }}
      overflowY={"auto"}
    >
      <Playlist title={`Dibuat untuk ${displayName}`} py={4} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
    </Box>
  );
}

export default MainUser;
