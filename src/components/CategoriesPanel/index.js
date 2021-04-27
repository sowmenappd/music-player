import React from "react";

import { Flex } from "components";
import HeaderSubpanel from "./Subpanels/CategoriesHeaderPanel";

const CategoriesPanel = ({ ...props }) => {
  return (
    <Flex col {...props}>
      <HeaderSubpanel />
    </Flex>
  );
};

export default CategoriesPanel;
