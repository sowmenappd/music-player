import React from "react";
import { Div } from "atomize";

const Card = ({ children, noshadow, ...rProps }) => {
  return (
    <Div
      d="flex"
      bg="white"
      align="center"
      justify="center"
      p="1rem"
      flexDir="column"
      rounded="lg"
      h="100%"
      {...rProps}
    >
      {children}
    </Div>
  );
};

export default Card;
