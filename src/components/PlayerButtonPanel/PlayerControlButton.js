import React from "react";
import { Button, Icon } from "atomize";
import { isMobile } from "hooks/useDevice";

const PlayerControlButton = ({
  name,
  onClick,
  rounded = null,
  size,
  ...props
}) => {
  const _Icon = (
    <Icon
      name={name}
      color="black"
      size={size}
      onClick={rounded ? null : onClick}
      {...props}
    />
  );

  return rounded ? (
    <Button
      h={isMobile() ? "4rem" : "2.5rem"}
      w={isMobile() ? "4rem" : "2.5rem"}
      bg="success100"
      hoverBg="success400"
      rounded={rounded}
      m="1rem"
      shadow="2"
      hoverShadow="4"
      onClick={onClick}
      {...props}
    >
      {_Icon}
    </Button>
  ) : (
    _Icon
  );
};

export default PlayerControlButton;
