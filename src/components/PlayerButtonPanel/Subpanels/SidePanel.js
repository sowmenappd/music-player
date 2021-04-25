import React, { useState } from "react";
import { Div } from "atomize";

import Button from "../../Button";

const loopOptions = ["no", "current", "all"];

const SidePanel = ({ liked, size }) => {
  const [_liked, setLiked] = useState(liked);
  const [loopIdx, setLoopingIdx] = useState(0);
  return (
    <Div
      d="flex"
      flexDir="row"
      justify="center"
      p={{ t: "0.4rem", r: "0.2rem" }}
    >
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
      />
    </Div>
  );
};

const LoopButton = ({ loop, size, onClick, ...props }) => (
  <Button
    name="Refresh"
    size={size}
    rounded="circle"
    bg={loop === "no" ? "success300" : "white"}
    hoverBg={loop === "no" ? "success400" : "white"}
    color={loop === "no" ? "white" : "black"}
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
    color={liked ? "danger700" : "black"}
    onClick={onClick}
    {...props}
  />
);

export default SidePanel;
