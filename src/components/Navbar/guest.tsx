import { Box, Button, Text, Link, Icon, VStack } from "@chakra-ui/react";
import nextLink from "next/link";
import { IoIosGlobe } from "react-icons/io";

function GuestNavbar() {
  return (
    <Box>
      {/* make first playlist */}
      <Box borderRadius="lg" bgColor={"#242424"} my="25px" p={4}>
        <Text color={"white"} fontWeight={"700"} fontSize={"16px"}>
          Buat playlist pertamamu
        </Text>
        <Text color={"white"} fontWeight={"500"} fontSize={"14px"} mt={2}>
          Caranya mudah, kami akan membantumu
        </Text>
        <Button
          borderRadius={"full"}
          mt={6}
          py="9px"
          px="15px"
          size={"0"}
          textColor={"black"}
          fontWeight={"650"}
          fontSize={"14px"}
          _hover={{ bgColor: "#a19fa0", textColor: "white" }}
        >
          Buat playlist
        </Button>
      </Box>
      {/* search podcast */}
      <Box borderRadius="lg" bgColor={"#242424"} mb={"120px"} p={4}>
        <Text color={"white"} fontWeight={"700"} fontSize={"16px"}>
          Ayo cari beberapa podcast untuk diikuti
        </Text>
        <Text color={"white"} fontWeight={"500"} fontSize={"14px"} mt={2}>
          Kami akan terus mengabarimu tentang episode baru
        </Text>
        <Button
          borderRadius={"full"}
          mt={6}
          py="9px"
          px="15px"
          size={"0"}
          textColor={"black"}
          fontWeight={"650"}
          fontSize={"14px"}
          _hover={{ bgColor: "#a19fa0", textColor: "white" }}
        >
          Jelajahi podcast
        </Button>
      </Box>
      {/* cookie and language */}
      <VStack align={"start"}>
        <Link
          as={nextLink}
          href="#"
          color="#adacac"
          fontWeight={"400"}
          fontSize={"12px"}
        >
          Cookie
        </Link>
        <Button
          mt={5}
          variant={"outline"}
          color={"white"}
          borderRadius={"full"}
          size={"sm"}
          borderColor={"#adacac"}
          _hover={{ bgColor: "#616161", borderColor: "white" }}
        >
          <Icon as={IoIosGlobe} boxSize={5} me={1} />
          <Text fontWeight={"600"}>Bahasa Indonesia</Text>
        </Button>
      </VStack>
    </Box>
  );
}

export default GuestNavbar;
