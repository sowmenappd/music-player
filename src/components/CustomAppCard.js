import React from "react";
import { Card } from "components";

const CustomAppCard = ({ children, ...restProps }) => {
  return (
    <Card
      d="flex"
      flexDir="row"
      w="100%"
      h="100%"
      align="center"
      {...restProps}
    >
      {children}
    </Card>
  );
};

export default CustomAppCard;
