import React from "react";
import { Button as Btn, Icon } from "atomize";
import { isMobile } from "hooks/useDevice";

const Button = ({ name, onClick, rounded = null, size, color, ...props }) => {
  const _Icon = (
    <Icon
      name={name}
      color={color || "black"}
      size={size}
      onClick={rounded ? null : onClick}
    />
  );

  return rounded ? (
    <Btn
      h={isMobile() ? "4rem" : "2.5rem"}
      w={isMobile() ? "4rem" : "2.5rem"}
      bg="success100"
      hoverBg="success400"
      rounded={rounded}
      shadow="2"
      hoverShadow="4"
      onClick={onClick}
      {...props}
    >
      {_Icon}
    </Btn>
  ) : (
    _Icon
  );
};

export default Button;
