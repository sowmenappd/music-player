import React from "react";
import { Text } from "atomize";
import { Flex } from "components";

const DetailsPanel = ({ folderCount = 2, songCount = 2 }) => {
  return (
    <Flex col h="4rem" justify="space-evenly">
      <Text fontFamily="primary" textWeight="500">
        Folders: {folderCount}, Songs: {songCount}
      </Text>
      <Text fontFamily="primary" textWeight="300">
        {" "}
        D:/Music{" "}
      </Text>
    </Flex>
  );
};

export default DetailsPanel;
