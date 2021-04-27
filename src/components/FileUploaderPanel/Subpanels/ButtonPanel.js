import React from "react";

import { Button, Flex } from "components";
import { isMobile } from "hooks/useDevice";

const ButtonPanel = () => {
  return (
    <Flex justify="flex-end">
      <CustomButton
        name="Draft"
        loading={false}
        loadingText="Uploading"
        onClick={null}
        hoverBg="info600"
        text="Add Songs"
        textProps={{
          textColor: "black",
          textWeight: "600",
          p: { t: ".25rem", l: ".5rem" },
        }}
        m={{ t: ".5rem", b: ".5rem", r: ".5rem", l: ".5rem" }}
      />
      <CustomButton
        name="FolderSolid"
        loading={false}
        loadingText="Uploading"
        onClick={null}
        hoverBg="info600"
        text="Change Folder"
        textProps={{
          textColor: "black",
          textWeight: "600",
          p: { t: ".25rem", l: ".5rem" },
          w: "6rem",
        }}
        m={{ t: ".5rem", b: ".5rem", l: ".5rem", r: ".5rem" }}
      />
    </Flex>
  );
};

const CustomButton = ({
  name,
  loading,
  loadingText,
  text,
  textProps,
  onClick = null,
  ...props
}) => (
  <Button
    name={name}
    loading={loading}
    loadingText={loadingText}
    size="20px"
    onClick={onClick}
    rounded="lg"
    text={!isMobile() ? text : null}
    textProps={textProps}
    {...props}
  />
);

export default ButtonPanel;
