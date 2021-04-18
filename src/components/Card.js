import React from "react";
import { Div, currentDevice } from "atomize";

export default function Card({ children, ...props }) {
  let deviceSize = currentDevice();

  return (
    <Div
      d="flex"
      bg="white"
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
