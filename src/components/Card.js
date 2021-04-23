import React from "react";
import { Div } from "atomize";

const Card = ({ children, ...props }) => {
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
      h="100%"
      {...props}
    >
      {children}
    </Div>
  );
};

export default Card;
