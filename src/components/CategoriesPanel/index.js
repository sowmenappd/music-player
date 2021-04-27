import React from "react";
import { Div } from "atomize";

import HeaderPanel from "./Subpanels/CategoriesHeaderPanel";

const CategoriesPanel = ({ ...props }) => {
  return (
    <Div d="flex" flexDir="column" {...props}>
      <HeaderPanel />
    </Div>
  );
};

export default CategoriesPanel;
