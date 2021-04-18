import { Input, Icon } from "atomize";

export const Inputfield = ({ label, rounded = "sm", iconProps, ...props }) => {
  return (
    <Input
      placeholder={label}
      p={{ x: "3rem" }}
      rounded={rounded}
      prefix={
        <Icon
          name="UserSolid"
          color="warning800"
          size="16px"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0.75rem"
          transform="translateY(-50%)"
          {...iconProps}
        />
      }
      {...props}
    />
  );
};
