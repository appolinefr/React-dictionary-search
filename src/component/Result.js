import React from "react";

import {Container} from "@chakra-ui/react";

import Word from "./Word";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.data) {
    return (
      <Container>
        <Word data={props.data} />
        {props.data.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </Container>
    );
  }
}
