import React from 'react'

import { Box, Container, Heading, chakra } from "@chakra-ui/react";

export default function Word(props) {
  return (
    <Box as={Container} maxW="full" p={4} borderWidth={1} my={4}>
      <Heading>{props.data.word}</Heading>
      <chakra.h2 fontWeight={400} fontSize="lg">
        {props.data.phonetic}
      </chakra.h2>
    </Box>
  );
}
