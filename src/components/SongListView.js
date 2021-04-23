import React from "react";
import { Text } from "atomize";

import { Card, CenteredView, HeaderTitle } from "components";

const SongListView = ({ songs, ...props }) => (
  <Card h="100%" justify="flex-start" {...props}>
    <HeaderTitle title="Songs" bg="info600" textColor="white" />
    <SongList songs={songs} />
  </Card>
);

const SongList = ({ songs }) => (
  <CenteredView m={{ t: "1rem" }} flexDir="column">
    {songs?.map((song, i) => (
      <SongView song={song} key={i} />
    ))}
  </CenteredView>
);

const SongView = ({ song }) => (
  <Card w="100%" shadow="0" hoverShadow="0">
    <Text fontFamily="primary">{song}</Text>
  </Card>
);

export default SongListView;
