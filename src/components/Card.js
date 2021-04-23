import React from "react";
import { Div } from "atomize";

const Card = ({ children, noshadow, ...props }) => {
  return (
    <Div
      d="flex"
      bg="white"
      align="center"
      justify="center"
      p="1rem"
      flexDir="column"
      rounded="lg"
      shadow={noshadow ? "0" : "3"}
      hoverShadow={noshadow ? "0" : "4"}
      h="100%"
      {...props}
    >
      {children}
    </Div>
  );
};

export default Card;
