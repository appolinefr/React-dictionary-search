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
      <Heading>{props.data.word}</Heading>
      <chakra.h2 fontWeight={400} fontSize="lg">
        {props.data.phonetic}
      </chakra.h2>
      <Link
        fontWeight={400}
        fontSize="lg"
        href={props.data.phonetics[0].audio}
        target={"_blank"}
        color={"pink.700"}
        textDecoration={"underline"}
      >
        Listen
      </Link>
    </Box>
  );
}
