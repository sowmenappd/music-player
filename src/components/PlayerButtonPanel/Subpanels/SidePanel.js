import React, { useState } from "react";
import { Div } from "atomize";

import Button from "../../Button";

const SidePanel = ({ liked, size }) => {
  const [_liked, setLiked] = useState(liked);
  return (
    <Div d="flex" flexDir="row" justify="center" p={{ r: "0.2rem" }}>
      <HeartButton
        liked={_liked}
        size={size}
        onClick={() => setLiked(!_liked)}
        h="3rem"
        w="3rem"
      />
    </Div>
  );
};

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
