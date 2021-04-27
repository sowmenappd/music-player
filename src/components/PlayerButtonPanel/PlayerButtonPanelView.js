import React, { useState } from "react";

import { CustomCard, Flex } from "components";
import { ControlPanel, SidePanel, MusicInfoPanel } from "./Subpanels";
import { isMobile } from "hooks/useDevice";

import song from "resources/test_sounds/Fade.mp3";

const PlayerButtonPanelView = ({ ...props }) => {
  const [paused, setPaused] = useState(true);

  const handlePaused = (paused) => {
    setPaused(paused);
    if (!paused) document.getElementById("player").play();
    else document.getElementById("player").pause();
  };

  return (
    <CustomCard flexDir="column" bg="warning600" {...props}>
      <audio id="player" src={song} autoPlay={false} />
      <ParentPanel
        paused={paused}
        playHandler={() => handlePaused(!paused)}
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
