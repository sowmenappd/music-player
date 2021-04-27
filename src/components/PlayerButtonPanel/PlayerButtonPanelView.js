import React, { useState } from "react";

import { CustomCard, Flex } from "components";
import { ControlPanel, SidePanel, MusicInfoPanel } from "./Subpanels";
import { isMobile } from "hooks/useDevice";

const PlayerButtonPanelView = ({ ...props }) => {
  const [paused, setPaused] = useState(false);

  return (
    <CustomCard flexDir="column" bg="warning600" {...props}>
      <ParentPanel
        paused={paused}
        playHandler={setPaused}
        iconSize="28px"
        liked={false}
      />
    </CustomCard>
  );
};

const ParentPanel = ({ liked, paused, playHandler, iconSize }) => {
  return (
    <>
      <Flex w="90%" align="flex-start" justify="space-around">
        <ControlPanel
          paused={paused}
          playHandler={playHandler}
          size={iconSize}
        />
        {!isMobile() && <MusicInfoPanel />}
        <SidePanel liked={liked} size="18px" />
      </Flex>
      {isMobile() && (
        <Flex align="flex-start" justify="center">
          <MusicInfoPanel />
        </Flex>
      )}
    </>
  );
};

export default PlayerButtonPanelView;
