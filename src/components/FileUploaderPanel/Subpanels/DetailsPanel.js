import React from "react";
import { Div, Text } from "atomize";

const DetailsPanel = () => {
  return (
    <Div d="flex" flexDir="column">
      <Text fontFamily="primary" textWeight="500">
        2 folders, total 3 songs{" "}
      </Text>
      <Text fontFamily="primary" textWeight="300">
        {" "}
        D:/Music{" "}
      </Text>
    </Div>
  );
};

export default DetailsPanel;
