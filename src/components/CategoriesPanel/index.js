import React from "react";
import { Div } from "atomize";

import HeaderSubpanel from "./Subpanels/CategoriesHeaderPanel";

const CategoriesPanel = ({ ...props }) => {
  return (
    <Div d="flex" flexDir="column" {...props}>
      <HeaderSubpanel />
    </Div>
  );
};

export default CategoriesPanel;
