import { Button, Col, Div, Icon, Row, Text } from "atomize";
import React from "react";

import {
  CategoriesPanel,
  CenteredView,
  FileUploaderPanelView,
  Flex,
  Modal,
  PlayerButtonPanelView,
  SongListView,
  WelcomeUserPanel,
} from "components";
import { isMobile, isTablet } from "hooks/useDevice";

export default function Player() {
  return (
    <CenteredView w="100%" h="100vh" p={{ l: "1rem", r: "1rem" }}>
      <Div h="100%" w="100%" p="0rem" m="0rem">
        <Row p={{ t: isMobile() || isTablet() ? "2rem" : "4rem" }} m="0rem">
          {!isMobile() && (
            <Col size={"4"} m="0rem">
              <SongListView songs={songs} currentSongId={0} m={{ b: "1rem" }} />
            </Col>
          )}
          <Col size={isMobile() ? "12" : "8"} m="0rem">
            <Div m="0rem" p="0rem">
              <WelcomeUserPanel />
              <FileUploaderPanelView m={{ t: "1rem" }} />
              <PlayerButtonPanelView m={{ t: "1rem" }} />
              <CategoriesPanel m={{ t: "1rem" }} />

              {isMobile() && (
                <SongListView
                  songs={songs}
                  currentSongId={0}
                  m={{ t: "1rem", b: "1rem" }}
                />
              )}
            </Div>
          </Col>
        </Row>
      </Div>
    </CenteredView>
  );
}

const songs = [];

// const songs = [
//   { title: "Song 1.mp3", album: "Album 1" },
//   { title: "Song 2.mp3", album: "Album 2" },
//   { title: "Song 3.mp3", album: "Album 3" },
//   { title: "Song 4.mp3", album: "Album 4" },
//   { title: "Song 5.mp3", album: "Album 5" },
//   { title: "Song 6.mp3", album: "Album 6" },
//   { title: "Song 7.mp3", album: "Album 7" },
//   { title: "Song 1.mp3", album: "Album 1" },
//   { title: "Song 2.mp3", album: "Album 2" },
//   { title: "Song 3.mp3", album: "Album 3" },
//   { title: "Song 4.mp3", album: "Album 4" },
//   { title: "Song 5.mp3", album: "Album 5" },
//   { title: "Song 6.mp3", album: "Album 6" },
//   { title: "Song 7.mp3", album: "Album 7" },
// ];
