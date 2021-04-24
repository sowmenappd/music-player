import React from "react";

import { Card } from "components";
import DetailsPanel from "./Subpanels/DetailsPanel";

const FileUploaderPanelView = () => {
  return (
    <Card
      justify="flex-start"
      bg="info200"
      d="flex"
      flexDir="row"
      h="100%"
      justify="space-between"
      align="center"
    >
      <DetailsPanel />
    </Card>
  );
};

export default FileUploaderPanelView;
