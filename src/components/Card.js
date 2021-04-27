import React from "react";
import { Flex } from "components";

const Card = ({ children, noshadow, ...rProps }) => {
  return (
    <Flex
      col
      align="center"
      justify="center"
      bg="white"
      p="1rem"
      rounded="lg"
      {...rProps}
    >
      {children}
    </Flex>
  );
};

export default Card;
