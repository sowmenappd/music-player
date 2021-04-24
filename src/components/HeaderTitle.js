import React from "react";
import { Text } from "atomize";

import { CenteredView } from "components";

const HeaderTitle = ({ title, ...props }) => {
  return (
    <CenteredView h="4rem" bg="gray400" d="flex" border rounded="lg" {...props}>
      <Text fontFamily="primary" tag="h2" d="flex" {...props}>
        {title}
      </Text>
    </CenteredView>
  );
};

export default HeaderTitle;
