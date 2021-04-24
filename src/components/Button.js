import React from "react";
import { Button as Btn, Icon, Text } from "atomize";
import { isMobile } from "hooks/useDevice";

const Button = ({
  name,
  text,
  onClick,
  rounded = null,
  size,
  color,
  ...props
}) => {
  const { textProps, loading, loadingText } = props;

  const _Icon = (
    <Icon
      name={loading ? "Loading" : name}
      color={color || "black"}
      size={size}
      onClick={rounded ? null : onClick}
    />
  );

  return rounded ? (
    <Btn
      disabled={loading}
      bg="success100"
      hoverBg="success400"
      rounded={rounded}
      shadow="2"
      hoverShadow="4"
      onClick={onClick}
      {...props}
      align="center"
    >
      {_Icon}
      {text && (
        <Text {...textProps}>
          {loading && loadingText ? loadingText : text}
        </Text>
      )}
    </Btn>
  ) : (
    _Icon
  );
};

export default Button;
