import React from "react";

import { Text } from "@chakra-ui/react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {props.synonyms.map((synonym, index) => {
          return (
            <Text as={"span"} fontStyle={"italic"} m={1} backgroundColor={"pink.700"} p={1} borderRadius={4} color={"white"} key={index}> {" "}
              {synonym}
            </Text>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
