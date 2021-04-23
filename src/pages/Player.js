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
              {_isMobile && <SongListView m={{ t: "1rem" }} songs={songs} />}
            </Div>
          </Col>
        </Row>
      </Div>
    </CenteredView>
  );
}

const songs = [
  "Song 1.mp3",
  "Song 2.mp3",
  "Song 3.mp3",
  "Song 4.mp3",
  "Song 5.mp3",
  "Song 6.mp3",
  "Song 7.mp3",
];
