import {
  Button,
  Icon,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spacer,
} from "@chakra-ui/react";

import { FaRegBell } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

function User() {
  const router = useRouter();

  const logoutHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    localStorage.setItem("access_token", "");
    localStorage.setItem("refresh_token", "");
    router.push("/");
  };

  return (
    <>
      <HStack spacing={"2"}>
        {/* notification  button */}
        <Button
          borderRadius={"full"}
          size={"0"}
          p="2"
          bgColor={"#0A0A0A"}
          textColor={"#A0A0A0"}
          _hover={{ bgColor: "#8a8787", textColor: "white" }}
        >
          <Icon as={FaRegBell} boxSize={4} />
        </Button>
        {/* profile button */}
        <Menu>
          <MenuButton
            as={Button}
            size={"0"}
            p="1"
            borderRadius={"full"}
            bgColor={"#0A0A0A"}
            textColor={"#A0A0A0"}
            _active={{ bgColor: "#0A0A0A" }}
            _hover={{ bgColor: "#8a8787", textColor: "white" }}
          >
            <Image
              src="/cover/spotify-cover-1.png"
              alt="First-love-img"
              borderRadius={"full"}
              w={6}
            />
          </MenuButton>
          <MenuList p={1} bgColor={"#282828"} borderColor={"#282828"}>
            <MenuItem
              bgColor={"#282828"}
              textColor={"#D5D5D5"}
              _hover={{ bgColor: "#403f3f" }}
            >
              Account
              <Spacer />
              <Icon as={BiLinkExternal} />
            </MenuItem>
            <MenuItem
              bgColor={"#282828"}
              textColor={"#D5D5D5"}
              _hover={{ bgColor: "#403f3f" }}
            >
              Profile
            </MenuItem>
            <MenuItem
              bgColor={"#282828"}
              textColor={"#D5D5D5"}
              _hover={{ bgColor: "#403f3f" }}
            >
              Setting
            </MenuItem>
            <MenuDivider m={0} borderColor={"#5c5b5b"} />
            <MenuItem
              bgColor={"#282828"}
              textColor={"#D5D5D5"}
              _hover={{ bgColor: "#403f3f" }}
              onClick={(e) => logoutHandler(e)}
            >
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </>
  );
}

export default User;
