import React from "react";

import { Box, Container, Heading, chakra, Link } from "@chakra-ui/react";

export default function Word(props) {
  return (
    <Box
      as={Container}
      maxW="full"
      p={6}
      borderWidth={1}
      my={4}
      backgroundColor={"white"}
      borderRadius={8}
    >
      <Heading mb={4}>{props.data.word}</Heading>
      <Link
        mr={4}
        fontWeight={400}
        fontSize="lg"
        href={props.data.phonetics[0].audio}
        target={"_blank"}
        color={"pink.700"}
        borderWidth={1}
        borderRadius={16}
        borderColor={"pink.700"}
        p={2}
        _hover={{
          bg: "pink.700",
          color: "white",
          borderColor: "white",
        }}
      >
        Listen
      </Link>
      <chakra.h2 as="span" fontWeight={400} fontSize="lg" mt={4}>
        {props.data.phonetic}
      </chakra.h2>
    </Box>
  );
}
