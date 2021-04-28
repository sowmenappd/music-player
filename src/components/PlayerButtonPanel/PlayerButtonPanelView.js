import React, { useState } from "react";

import { CustomCard, Flex } from "components";
import { ControlPanel, SidePanel, MusicInfoPanel } from "./Subpanels";
import { isMobile } from "hooks/useDevice";

import song from "resources/test_sounds/Fade.mp3";

const PlayerButtonPanelView = ({ ...props }) => {
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(100);

  const handlePaused = (paused) => {
    setPaused(paused);
    if (!paused) document.getElementById("player").play();
    else document.getElementById("player").pause();
  };

  const handleVolumeChange = (v) => {
    setVolume(v);
    document.getElementById("player").volume = v / 100;
  };

  return (
    <CustomCard flexDir="column" bg="warning600" {...props}>
      <audio id="player" src={song} autoPlay={false} muted={volume == 0} />
      <ParentPanel
        paused={paused}
        volume={volume}
        playHandler={() => handlePaused(!paused)}
        volumeHandler={handleVolumeChange}
        iconSize="28px"
        liked={false}
      />
    </CustomCard>
  );
};

const ParentPanel = ({
  liked,
  paused,
  volume,
  playHandler,
  volumeHandler,
  iconSize,
}) => {
  return (
    <>
      <Flex w="90%" align="flex-start" justify="space-around">
        <ControlPanel
          paused={paused}
          volume={volume}
          playHandler={playHandler}
          onChangeVolume={volumeHandler}
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
