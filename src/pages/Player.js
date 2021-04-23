import { Col, Div, Row, Text } from "atomize";
import React from "react";

import Card from "components/Card";
import CenteredView from "components/CenteredView";
import { isMobile } from "hooks/useDevice";

export default function Player() {
  const _isMobile = isMobile();

  return (
    <CenteredView>
      <Div h="100vh" w="100vw">
        <Row p={{ t: "4rem" }}>
          {!_isMobile && (
            <Col size={"4"}>
              <SongListView songs={songs} />
            </Col>
          )}
          <Col size={_isMobile ? "12" : "8"}>
            <Div>
              <PlayerButtonPanelView />
              {_isMobile && <SongListView m={{ t: "1rem" }} songs={songs} />}
            </Div>
          </Col>
        </Row>
      </Div>
    </CenteredView>
  );
}

const PlayerButtonPanelView = () => (
  <Card justify="flex-start">
    <HeaderTitle title="Player screen" />
    <PlayerButtonPanel />
  </Card>
);

const PlayerButtonPanel = () => (
  <CenteredView m={{ b: "2rem", t: "4rem" }}>
    <PlayerButtons />
  </CenteredView>
);

const PlayerButtons = () => (
  <CenteredView>
    <Card w="100%" h="6rem" bg="info300" shadow="0" hoverShadow="0">
      test
    </Card>
  </CenteredView>
);

const songs = [
  "Song 1.mp3",
  "Song 2.mp3",
  "Song 3.mp3",
  "Song 4.mp3",
  "Song 5.mp3",
  "Song 6.mp3",
  "Song 7.mp3",
];

const SongListView = ({ songs, ...props }) => (
  <Card h="100%" justify="flex-start" {...props}>
    <HeaderTitle title="Songs" bg="info600" textColor="white" />
    <SongList songs={songs} />
  </Card>
);

const SongList = ({ songs }) => (
  <CenteredView m={{ t: "1rem" }} flexDir="column">
    {songs?.map((song) => (
      <SongView song={song} />
    ))}
  </CenteredView>
);

const SongView = ({ song }) => (
  <Card w="100%" shadow="0" hoverShadow="0">
    <Text>{song}</Text>
  </Card>
);

const HeaderTitle = ({ title, ...props }) => (
  <CenteredView
    h="4rem"
    bg="gray400"
    d="flex"
    w="100%"
    border
    rounded="lg"
    {...props}
  >
    <Text fontFamily="primary" tag="h2" {...props}>
      {title}
    </Text>
  </CenteredView>
);
