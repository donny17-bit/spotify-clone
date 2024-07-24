import { Box } from "@chakra-ui/react";
import nextLink from "next/link";
import Playlist from "./playlists";
import { getUserTopArtist, getFeaturedPlaylist } from "@/store/action/user";
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

  console.log("playlist : ", featuredPlaylist);

  const dispatch = useDispatch();
  const router = useRouter();
  const displayName = userState.data.display_name;
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (access_token) {
      dispatch(getUserTopArtist(access_token, 6, 0));
      dispatch(getFeaturedPlaylist(access_token, 6, 0, "id_ID"));

      router.push("/");
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
      <Playlist title={`${displayName}'s Top Artist`} py={4} data={topArtist} />
      <Playlist
        title="Hit terpopuler hari ini"
        py={5}
        data={featuredPlaylist}
      />
      <Playlist title="Hit terpopuler hari ini" py={5} data={topArtist} />
      <Playlist title="Hit terpopuler hari ini" py={5} data={topArtist} />
    </Box>
  );
}

export default MainUser;
