import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" h-[100vh] w-[100vw] bg-black">
      <Grid
        templateAreas={`"nav main"`}
        // gridTemplateRows={"50px 1fr"}
        gridTemplateColumns={"25%"}
        h="100%"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem p="2" bg="pink.300" area={"nav"}>
          <Box bg="tomato" p={4} color="white" borderRadius={"lg"}>
            <Box>Logo</Box>
            <Button variant={"link"} w="100%">
              <Text textAlign={"left"} w="100%">
                Home
              </Text>
            </Button>
            <Button variant={"link"} w="100%">
              <Text textAlign={"left"} w="100%">
                Cari
              </Text>
            </Button>
          </Box>
          <Box
            bg="tomato"
            p={4}
            color="white"
            borderRadius={"lg"}
            mt={2}
            h={"80%"}
          >
            <Box>Logo</Box>
            <Button variant={"link"} w="100%">
              <Text textAlign={"left"} w="100%">
                Home
              </Text>
            </Button>
            <Button variant={"link"} w="100%">
              <Text textAlign={"left"} w="100%">
                Cari
              </Text>
            </Button>
          </Box>
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </main>
  );
}
