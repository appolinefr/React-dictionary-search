import React from "react";

import { Image, Grid, GridItem, Link, Container } from "@chakra-ui/react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <Container maxW="5xl" my={8}>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={{ base: "6", sm: "6", md: "8" }}
        >
          {props.photos.map((photo, index) => {
            if (index < 9) {
              return (
                <GridItem key={index}>
                  <Link href={photo.src.original} target={"_blank"}>
                    <Image
                      src={photo.src.landscape}
                      alt={photo.alt}
                      borderRadius={10}
                    ></Image>
                  </Link>
                </GridItem>
              );
            } else {
              return null;
            }
          })}
        </Grid>
      </Container>
    );
  } else {
    return null;
  }
}
