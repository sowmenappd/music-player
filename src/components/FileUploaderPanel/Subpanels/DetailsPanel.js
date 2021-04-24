import React from "react";
import { Div, Text } from "atomize";

const DetailsPanel = ({ folderCount = 2, songCount = 2 }) => {
  return (
    <Div d="flex" flexDir="column">
      <Text fontFamily="primary" textWeight="500">
        Folders: {folderCount}, Songs: {songCount}
      </Text>
      <Text fontFamily="primary" textWeight="300">
        {" "}
        D:/Music{" "}
      </Text>
    </Div>
  );
};

export default DetailsPanel;
