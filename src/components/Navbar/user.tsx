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
import userPlaylist from "@/store/reducer/userPlaylists";
import { useDispatch, useSelector } from "react-redux";

type data = {
  isLogin: boolean;
  height: number;
};

function UserNavbar(data: data) {
  const userPlaylists = useSelector((state: any) => state.userPlaylist);
  const items = userPlaylists.data.items;

  return (
    <Flex
      flexDirection={"column"}
      mt={5}
      maxH={`${data.height}px`}
      _hover={{ overflowY: "auto" }}
      overflowY={"hidden"}
    >
      {items.map((item: any, i: number) => (
        <div key={i}>
          <ListPlaylist
            image={item.images[0].url}
            name={item.name}
            owner={item.owner.display_name}
            type={item.type}
          />
        </div>
      ))}
    </Flex>
  );
}

export default UserNavbar;
