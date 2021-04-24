import React from "react";
import { Div } from "atomize";

import { Button } from "components";
import { isMobile } from "hooks/useDevice";

const ButtonPanel = () => {
  return (
    <Div d="flex" flexDir="row" justify="space-around">
      <Button
        name="Draft"
        // loading={true}
        loadingText="Uploading"
        size="20px"
        onClick={null}
        rounded="lg"
        text={!isMobile() ? "Add Songs" : null}
        textProps={{
          textColor: "black",
          textWeight: "600",
          p: { t: ".25rem", l: ".5rem" },
        }}
        m={{ t: ".5rem", b: ".5rem", r: ".5rem", l: ".5rem" }}
      />
      <Button
        name="FolderSolid"
        // loading={true}
        loadingText="Uploading"
        size="20px"
        onClick={null}
        rounded="lg"
        text={!isMobile() ? "Change Folder" : null}
        textProps={{
          textColor: "black",
          textWeight: "600",
          p: { t: ".25rem", l: ".5rem" },
          w: "6rem",
        }}
        m={{ t: ".5rem", b: ".5rem", l: ".5rem", r: ".5rem" }}
      />
    </Div>
  );
};

export default ButtonPanel;
