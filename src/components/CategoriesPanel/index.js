"use strict";

import React, { useState } from "react";

import { Flex } from "components";
import HeaderSubpanel from "./Subpanels/CategoriesHeaderPanel";
import CategoryContentPanel from "./Subpanels/CategoryContentPanel";

const CategoriesPanel = ({ ...props }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setModalCategory] = useState("Artists");
  return (
    <Flex col {...props}>
      <HeaderSubpanel
        onBtnClick={(name) => {
          setModalCategory(name);
          setModalOpen(true);
        }}
      />
      <CategoryContentPanel
        isOpen={modalOpen}
        displayCategory={category}
        onClose={() => setModalOpen(false)}
      />
    </Flex>
  );
};

export default CategoriesPanel;
