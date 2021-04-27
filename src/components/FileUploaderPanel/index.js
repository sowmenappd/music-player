import React from "react";

import { CustomCard } from "components";
import DetailsPanel from "./Subpanels/DetailsPanel";
import ButtonPanel from "./Subpanels/ButtonPanel";

const FileUploaderPanelView = ({ ...props }) => {
  return (
    <CustomCard bg="info200" justify="space-between" {...props}>
      <DetailsPanel />
      <ButtonPanel />
    </CustomCard>
  );
};

export default FileUploaderPanelView;
