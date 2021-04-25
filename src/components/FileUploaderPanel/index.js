import React from "react";

import { Card } from "components";
import DetailsPanel from "./Subpanels/DetailsPanel";
import ButtonPanel from "./Subpanels/ButtonPanel";

const FileUploaderPanelView = ({ ...props }) => {
  return (
    <Card
      justify="flex-start"
      bg="info200"
      d="flex"
      flexDir="row"
      h="100%"
      justify="space-between"
      align="center"
      shadow="2"
      hoverShadow="2"
      {...props}
    >
      <DetailsPanel />
      <ButtonPanel />
    </Card>
  );
};

export default FileUploaderPanelView;
