import { Box } from "@chakra-ui/react";
import nextLink from "next/link";
import Playlist from "./playlists";
import { getUserTopArtist } from "@/store/action/user";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function MainUser() {
  const userState = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const displayName = userState.data.display_name;
  const access_token = localStorage.getItem("access_token");

  const userArtist = async (access_token: string) => {
    dispatch(getUserTopArtist(access_token, 6, 0));
  };

  useEffect(() => {
    if (access_token) {
      userArtist(access_token);
    }
  }, []);

  return (
    <Box
      maxH="90vh"
      bgGradient="linear(to-b, #1E1E1E, #121212)"
      borderBottomRadius="lg"
      px={6}
      // _hover={{ overflowY: "auto" }}
      overflowY={"auto"}
    >
      <Playlist title={`${displayName}'s Top Artist`} py={4} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
      <Playlist title="Hit terpopuler hari ini" py={5} />
    </Box>
  );
}

export default MainUser;
