import React from "react";

import { Box, Container, Text } from "@chakra-ui/react";

import Synonyms from "./Synonyms";

export default function Meaning(props) {
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
      <Text fontWeight={600} my={2} fontSize={"xl"}>
        {props.meaning.partOfSpeech}
      </Text>
      <Text>{props.meaning.definitions[0].definition}</Text>
      <Text fontStyle={"italic"} color={"grey"} my={2}>
        {props.meaning.definitions[0].example}
      </Text>
      <Synonyms synonyms={props.meaning.synonyms} />
    </Box>
  );
}
