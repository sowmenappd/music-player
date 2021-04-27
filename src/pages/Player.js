import { Col, Div, Row } from "atomize";
import React from "react";

import {
  CenteredView,
  SongListView,
  MultiViewPanel,
  PlayerButtonPanelView,
  FileUploaderPanelView,
} from "components";
import { isDesktop, isMobile, isTablet } from "hooks/useDevice";

export default function Player() {
  return (
    <CenteredView
      h={isDesktop() ? "100vh" : "100%"}
      w="100%"
      p={{ l: "1rem", r: "1rem", b: "5rem" }}
    >
      <Div h="100%" w="100%" p="0rem" m="0rem">
        <Row p={{ t: isMobile() || isTablet() ? "2rem" : "4rem" }} m="0rem">
          {!isMobile() && (
            <Col size={"4"} m="0rem">
              <SongListView songs={songs} currentSongId={0} />
            </Col>
          )}
          <Col size={isMobile() ? "12" : "8"} m="0rem">
            <Div m="0rem" p="0rem">
              <MultiViewPanel />
              <FileUploaderPanelView m={{ t: "1rem" }} />
              <PlayerButtonPanelView m={{ t: "1rem" }} />
              {isMobile() && <SongListView songs={songs} m={{ t: "1rem" }} />}
            </Div>
          </Col>
        </Row>
      </Div>
    </CenteredView>
  );
}

const songs = [
  { title: "Song 1.mp3", album: "Album 1" },
  { title: "Song 2.mp3", album: "Album 2" },
  { title: "Song 3.mp3", album: "Album 3" },
  { title: "Song 4.mp3", album: "Album 4" },
  { title: "Song 5.mp3", album: "Album 5" },
  { title: "Song 6.mp3", album: "Album 6" },
  { title: "Song 7.mp3", album: "Album 7" },
  { title: "Song 1.mp3", album: "Album 1" },
  { title: "Song 2.mp3", album: "Album 2" },
  { title: "Song 3.mp3", album: "Album 3" },
  { title: "Song 4.mp3", album: "Album 4" },
  { title: "Song 5.mp3", album: "Album 5" },
  { title: "Song 6.mp3", album: "Album 6" },
  { title: "Song 7.mp3", album: "Album 7" },
];
