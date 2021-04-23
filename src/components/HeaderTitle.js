import React from "react";
import { Text } from "atomize";

import { CenteredView } from "components";

const HeaderTitle = ({ title, ...props }) => {
  return (
    <CenteredView
      h="4rem"
      bg="gray400"
      d="flex"
      w="100%"
      border
      rounded="lg"
      {...props}
    >
      <Text fontFamily="primary" tag="h2" {...props}>
        {title}
      </Text>
    </CenteredView>
  );
};

export default HeaderTitle;
