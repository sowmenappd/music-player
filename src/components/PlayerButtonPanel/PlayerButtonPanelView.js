import React, { useState } from "react";
import { Div } from "atomize";

import { CustomCard } from "components";
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
      <Div
        h="100%"
        w="90%"
        d="flex"
        flexDir="row"
        align="flex-start"
        justify="space-around"
      >
        <ControlPanel
          paused={paused}
          playHandler={playHandler}
          size={iconSize}
        />
        {!isMobile() && <MusicInfoPanel />}
        <SidePanel liked={liked} size="18px" />
      </Div>
      {isMobile() && (
        <Div
          h="100%"
          w="100%"
          d="flex"
          flexDir="row"
          align="flex-start"
          justify="center"
        >
          <MusicInfoPanel />
        </Div>
      )}
    </>
  );
};

export default PlayerButtonPanelView;
