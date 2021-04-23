import React from "react";

import { Card, CenteredView, HeaderTitle } from "components";

const PlayerButtonPanelView = () => {
  return (
    <Card justify="flex-start">
      <HeaderTitle title="Player screen" />
      <PlayerButtonPanel />
    </Card>
  );
};

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

export default PlayerButtonPanelView;
