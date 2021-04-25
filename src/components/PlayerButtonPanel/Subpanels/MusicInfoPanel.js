import React, { useState } from "react";
import { Button, Div, Text } from "atomize";
import { Line } from "rc-progress";
import { isMobile } from "hooks/useDevice";
import { Collapse } from "components";

const px = "5px";

const MusicInfoPanel = ({ song }) => {
  const [showCollapse, setShow] = useState(false);

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
        justify="space-between"
      >
        <Text fontFamily="primary" p=".5rem">
          0:00
        </Text>
        <Div w="100%" p={{ b: ".25rem" }}>
          <Line percent="60" strokeWidth="1.5" />
        </Div>
        <Text fontFamily="primary" p=".5rem">
          3:45
        </Text>
      </Div>
      <Div justify="center" w="100%" m={{ t: "1rem" }}>
        <Collapse
          showCollapse={showCollapse}
          button={
            <Button onClick={() => setShow(!showCollapse)}>
              Expand library
            </Button>
          }
          buttonProps={{
            rounded: "circle",
            title: "Open categories",
          }}
          cellProps={(i) => ({
            p: { x: "2rem", y: "1.75rem" },
            border: { b: i !== 3 && "1px solid" },
            borderColor: "gray400",
            justify: "center",
          })}
          collapseProps={{
            justify: "left",
          }}
        >
          <Div>1</Div>
          <Div>2</Div>
          <Div>3</Div>
          <Div>1</Div>
        </Collapse>
      </Div>
    </Div>
  );
};

export default MusicInfoPanel;
