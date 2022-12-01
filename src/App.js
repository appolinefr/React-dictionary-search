import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Search from "./component/Search";


function App() {
  return (
    <ChakraProvider>
      <Search defaultWord={"Beer"}/>
    </ChakraProvider>
  );
}

export default App;
