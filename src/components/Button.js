import React from "react";
import { Button as Btn, Div, Icon, Text } from "atomize";

const Button = ({
  name,
  text,
  onClick,
  rounded = null,
  size,
  iconColor,
  ...props
}) => {
  const { textProps, loading, loadingText } = props;

  const _Icon = (
    <Icon
      name={loading ? "Loading" : name}
      color={iconColor || "black"}
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
    >
      <Div d="flex" align="center">
        {_Icon}
        {text && (
          <Text {...textProps}>
            {loading && loadingText ? loadingText : text}
          </Text>
        )}
      </Div>
    </Btn>
  ) : (
    _Icon
  );
};

export default Button;
