import React, {useState} from "react";

import { Box, Container, Text, Heading, Input, Flex } from "@chakra-ui/react";

export default function Search() {
const [word, setWord] = useState("");

  const search = (e) => {
    e.preventDefault();
    alert(`Searching for ${word}`)
  };

  const handleWordChange = (e) =>{
   setWord(e.target.value);
  }

  return (
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
  );
}
