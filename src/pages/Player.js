import { Col, Div, Row } from "atomize";
import React from "react";

import { CenteredView, SongListView, PlayerButtonPanelView } from "components";
import { isMobile } from "hooks/useDevice";

export default function Player() {
  const _isMobile = isMobile();

  return (
    <CenteredView>
      <Div h="100%" w="100%">
        <Row p={{ t: "4rem" }}>
          {!_isMobile && (
            <Col size={"4"}>
              <SongListView songs={songs} />
            </Col>
          )}
          <Col size={_isMobile ? "12" : "8"}>
            <Div>
              <PlayerButtonPanelView />
              {_isMobile && <SongListView songs={songs} m={{ t: "1rem" }} />}
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
