import { Div } from "atomize";
import React from "react";

const Flex = (props) => {
  return (
    <Div
      d="flex"
      flexDir={props?.col ? "column" : "row"}
      w="100%"
      h="100%"
      {...props}
    >
      {props?.children}
    </Div>
  );
};

export default Flex;
