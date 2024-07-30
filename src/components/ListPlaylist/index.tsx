import { Box, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import nextLink from "next/link";

type item = {
  image: string;
  name: string;
  type: string;
  owner: string;
};

function ListPlaylist(items: item) {
  let type = "artist";

  if (items.type === "playlist") {
    type = `${items.type} | ${items.owner}`;
  }

  return (
    <Box _hover={{ bgColor: "#232323" }} p={2} borderRadius={"lg"}>
      <Link as={nextLink} href="#" _hover={{ textAtribute: "none" }}>
        <HStack>
          <Image
            src={items.image}
            alt={items.name}
            w={50}
            borderRadius={"lg"}
          />
          <VStack gap={0} align={"start"}>
            <Text>{items.name}</Text>
            <Text fontSize={13} textAlign={"left"} textColor={"#A2A2A2"}>
              {type}
            </Text>
          </VStack>
        </HStack>
      </Link>
    </Box>
  );
}

export default ListPlaylist;
