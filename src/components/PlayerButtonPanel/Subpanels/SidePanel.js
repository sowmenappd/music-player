import React, { useState } from "react";

import { Button, Flex } from "components";

const loopOptions = ["no", "current", "all"];

const SidePanel = ({ liked, size }) => {
  const [_liked, setLiked] = useState(liked);
  const [loopIdx, setLoopingIdx] = useState(0);
  return (
    <Flex w="" justify="center" p={{ t: "0.4rem", r: "0.2rem" }}>
      <HeartButton
        liked={_liked}
        size={size}
        onClick={() => setLiked(!_liked)}
        h="2rem"
        w="2rem"
      />
      <LoopButton
        loop={loopOptions[loopIdx]} // "no", "current", "all"
        size={size}
        onClick={() => {
          const idx = (loopIdx + 1) % loopOptions.length;
          setLoopingIdx(idx);
        }}
        h="2rem"
        w="2rem"
        m={{ l: ".75rem" }}
      />
    </Flex>
  );
};

const LoopButton = ({ loop, size, onClick, ...props }) => (
  <Button
    name={loop === "no" || loop === "current" ? "Refresh" : "Bulk"}
    size={size}
    rounded="circle"
    bg={loop === "no" ? "white" : "success600"}
    hoverBg={loop === "no" ? "white" : "success800"}
    color={loop === "no" ? "black" : "white"}
    onClick={onClick}
    {...props}
  />
);

const HeartButton = ({ liked, size, onClick, ...props }) => (
  <Button
    name="HeartSolid"
    size={size}
    rounded="circle"
    bg={liked ? "danger300" : "white"}
    hoverBg={liked ? "danger400" : "white"}
    iconColor={liked ? "danger700" : "black"}
    onClick={onClick}
    {...props}
  />
);

export default SidePanel;
