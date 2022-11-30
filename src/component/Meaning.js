import React from "react";

import { Box, Container, Text } from "@chakra-ui/react";

export default function Meaning(props) {
  return (
    <Box as={Container} maxW="full" p={4} borderWidth={1} my={4}>
      <Text fontWeight={500}>{props.meaning.partOfSpeech}</Text>
      <Text>{props.meaning.definitions[0].definition}</Text>
      <Text fontStyle={"italic"}>{props.meaning.definitions[0].example}</Text>
    </Box>
  );
}
