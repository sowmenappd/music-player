import React, { useState } from "react";
import { Div } from "atomize";

import { Card, CenteredView } from "components";
import { ControlPanel, SidePanel, MusicInfoPanel } from "./Subpanels";
import { isMobile } from "hooks/useDevice";

const PlayerButtonPanelView = ({ ...props }) => {
  const [paused, setPaused] = useState(false);

  return (
    <Card justify="flex-start" bg="info200" {...props}>
      <ParentPanel
        paused={paused}
        playHandler={setPaused}
        iconSize="28px"
        liked={false}
      />
    </Card>
  );
};

const ParentPanel = ({ liked, paused, playHandler, iconSize }) => {
  return (
    <CenteredView m={{ b: ".5rem", t: ".5rem" }} flexDir="column">
      <Div
        h="100%"
        w="100%"
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
      <Div
        h="100%"
        w="100%"
        d="flex"
        flexDir="row"
        align="flex-start"
        justify="center"
      >
        {isMobile() && <MusicInfoPanel />}
      </Div>
    </CenteredView>
  );
};

export default PlayerButtonPanelView;
