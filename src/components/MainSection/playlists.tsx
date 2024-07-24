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

type image = {
  height: number;
  url: string;
  width: number;
};

type items = {
  description: string;
  external_url: object;
  followers: object;
  images: image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
  genres: string[];
};

type datas = {
  title: string;
  py: number;
  data: items[];
};

function Playlist(data: datas) {
  const topArtist = data.data;

  return (
    <Box py={data.py}>
      <HStack justify={"space-between"} pb={3}>
        <Link as={nextLink} textColor={"white"} href="#" fontSize={23}>
          {data.title}
        </Link>
        <Link as={nextLink} textColor={"#ABABAB"} href="#" fontSize={14}>
          Tampilkan semua
        </Link>
      </HStack>
      <Grid templateColumns="repeat(6, 1fr)" gap={3}>
        {/* album cover */}
        {topArtist.map((item: items, i: number) => (
          <GridItem key={i}>
            <Link as={nextLink} href="#">
              <Card
                bgColor={"#171717"}
                _hover={{ bgColor: "#242424" }}
                h={"100%"}
                w={"100%"}
              >
                <CardBody p={3} h="100%" w="100%">
                  <Image
                    src={item.images[0].url}
                    aspectRatio={"1/1"}
                    objectFit={"cover"}
                    alt={item.name}
                    borderRadius={"lg"}
                  />
                  <Stack mt="3">
                    <Heading fontSize={17} color={"white"} noOfLines={1}>
                      {item.name}
                    </Heading>
                    <Text color={"#bfbdbd"} fontSize={13} noOfLines={2}>
                      {item.genres !== undefined
                        ? item.genres.join(", ")
                        : item.description.slice(
                            0,
                            item.description.indexOf(".") !== -1
                              ? item.description.indexOf(".") + 1
                              : item.description.length
                          )}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Playlist;
