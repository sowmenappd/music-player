import React from "react";
import { Div, Text } from "atomize";
import { Line } from "rc-progress";
import { isMobile } from "hooks/useDevice";

const px = "10px";

const MusicInfoPanel = ({ song }) => {
  const { title, album } = song | null;
  return (
    <Div
      w="100%"
      h="100%"
      d="flex"
      flexDir="column"
      align="center"
      textAlign="center"
      p={{ l: px, r: px, t: isMobile() ? "1rem" : "0rem", b: "0rem" }}
    >
      <Text fontFamily="primary" tag="h3" textWeight="500" p={{ b: ".5rem" }}>
        {title || "Song title"}
      </Text>
      <Text fontFamily="primary" tag="h4" textWeight="300" p={{ b: ".25rem" }}>
        {album || "Song Album"}
      </Text>
      <Div
        d="flex"
        flexDir="row"
        w="100%"
        h="100%"
        m={{ t: "1rem" }}
        align="center"
      >
        <Text fontFamily="primary" p=".5rem">
          0:00
        </Text>
        <Div w="100%">
          <Line
            percent="60"
            strokeWidth="1.5"
            // style={{ paddingTop: 16, margin: 0 }}
          />
        </Div>
        <Text fontFamily="primary" p=".5rem">
          3:45
        </Text>
      </Div>
    </Div>
  );
};

export default MusicInfoPanel;
