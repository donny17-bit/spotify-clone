import {
  Box,
  Grid,
  GridItem,
  Text,
  Link,
  HStack,
  CardBody,
  Stack,
  Heading,
  Card,
  Image,
} from "@chakra-ui/react";
import nextLink from "next/link";

function DefaultMainSection() {
  return (
    <Box
      h="90vh"
      bgGradient="linear(to-b, #1E1E1E, #121212)"
      borderBottomRadius="lg"
      px={6}
    >
      <HStack justify={"space-between"} py={3}>
        <Link as={nextLink} textColor={"white"} href="#" fontSize={25}>
          Playlist Spotify
        </Link>
        <Link as={nextLink} textColor={"#ABABAB"} href="#" fontSize={14}>
          Tampilkan semua
        </Link>
      </HStack>
      <Grid templateColumns="repeat(5, 1fr)" gap={3}>
        <GridItem w="100%">
          <Link as={nextLink} href="#">
            <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
              <CardBody p={3}>
                <Image
                  src="/cover/spotify-cover-1.png"
                  alt="First-love-img"
                  borderRadius={"lg"}
                />
                <Stack mt="3">
                  <Heading fontSize={17} color={"white"}>
                    First Love
                  </Heading>
                  <Text color={"#bfbdbd"} fontSize={13}>
                    Embark on a soul-stirring journey through the ench...
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
        <GridItem w="100%">
          <Link as={nextLink} href="#">
            <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
              <CardBody p={3}>
                <Image
                  src="/cover/spotify-cover-4.png"
                  alt="down-in-the-ville-img"
                  borderRadius={"lg"}
                />
                <Stack mt="3">
                  <Heading fontSize={17} color={"white"}>
                    Rap Realms
                  </Heading>
                  <Text color={"#bfbdbd"} fontSize={13}>
                    Dive into our Spotify rap playlist, Where beats bump....
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
        <GridItem w="100%">
          <Link as={nextLink} href="#">
            <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
              <CardBody p={3}>
                <Image
                  src="/cover/spotify-cover-8.png"
                  alt="Study-Struggle-img"
                  borderRadius={"lg"}
                />
                <Stack mt="3">
                  <Heading fontSize={17} color={"white"}>
                    Study Struggle
                  </Heading>
                  <Text color={"#bfbdbd"} fontSize={13}>
                    Pop Pleasures: Tune into the Catchiest Hits!
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
        <GridItem w="100%">
          <Link as={nextLink} href="#">
            <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
              <CardBody p={3}>
                <Image
                  src="/cover/spotify-cover-3.png"
                  alt="Techno-anthem-img"
                  borderRadius={"lg"}
                />
                <Stack mt="3">
                  <Heading fontSize={17} color={"white"}>
                    Techno Anthem
                  </Heading>
                  <Text color={"#bfbdbd"} fontSize={13}>
                    Experience the ultimate Techno thrill with our playlist
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
        <GridItem w="100%">
          <Link as={nextLink} href="#">
            <Card bgColor={"#171717"} _hover={{ bgColor: "#242424" }}>
              <CardBody p={3}>
                <Image
                  src="/cover/spotify-cover-6.png"
                  alt="rnb-90-img"
                  borderRadius={"lg"}
                />
                <Stack mt="3">
                  <Heading fontSize={17} color={"white"}>
                    90's RnB
                  </Heading>
                  <Text color={"#bfbdbd"} fontSize={13}>
                    Step back into the smooth of the 90s with our R&B playlist
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default DefaultMainSection;
