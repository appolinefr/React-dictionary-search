import React, { useState } from "react";
import axios from "axios";

import { Box, Container, Text, Heading, Input, Flex } from "@chakra-ui/react";

import Result from "./Result";

export default function Search() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const search = (e) => {
    e.preventDefault();
    dictionarySearch();
  };

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleResponse = (response) => {
    console.log(response.data[0]);
    setDefinition(response.data[0]);
    setLoaded(true);
  };

  const dictionarySearch = () => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  };

  if (loaded) {
    return (
      <Box as={Container} maxW="full" p={4}>
        <Box as={Container} maxW="full" p={4}>
          <Heading mb={8} textAlign={"center"}>
            React Dictionary
          </Heading>
          <Text mb={4} textAlign={"center"}>
            What word would you like to search?
          </Text>
          <form onSubmit={search}>
            <Flex justifyContent={"center"}>
              <Input
                type="search"
                placeholder="Search for a word..."
                margin={2}
                maxWidth={"500px"}
                onChange={handleWordChange}
              />
              <Input type={"submit"} margin={2} maxWidth={"120px"} />
            </Flex>
          </form>
        </Box>
        <Box as={Container} maxW="full" p={4}>
          <Result data={definition} />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box as={Container} maxW="full" p={4}>
        <Box as={Container} maxW="full" p={4}>
          <Heading mb={8} textAlign={"center"}>
            React Dictionary
          </Heading>
          <Text mb={4} textAlign={"center"}>
            What word would you like to search?
          </Text>
          <form onSubmit={search}>
            <Flex justifyContent={"center"}>
              <Input
                type="search"
                placeholder="Search for a word..."
                margin={2}
                maxWidth={"500px"}
                onChange={handleWordChange}
              />
              <Input type={"submit"} margin={2} maxWidth={"120px"} />
            </Flex>
          </form>
        </Box>
      </Box>
    );
  }
}
