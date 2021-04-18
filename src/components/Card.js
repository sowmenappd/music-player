import React from "react";
import { Div, currentDevice } from "atomize";

export default function Card({ children, ...props }) {
  let deviceSize = currentDevice();

  return (
    <Div
      d="flex"
      bg="white"
      m={{ l: deviceSize === "xs" ? "0rem" : "2rem" }}
      w={{ xs: "75vw", sm: "60vw", md: "45vw", lg: "35vw" }}
      h="50%"
      align="center"
      justify="center"
      p="1rem"
      flexDir="column"
      rounded="lg"
      shadow="3"
      hoverShadow="4"
      {...props}
    >
      {children}
    </Div>
  );
}
