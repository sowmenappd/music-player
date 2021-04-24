import React from "react";
import { Div, Text } from "atomize";

import { Card, CenteredView, HeaderTitle } from "components";
import { isDesktop, isMobile } from "hooks/useDevice";
import Button from "./Button";

const SongListView = ({ songs, ...props }) => {
  return (
    <Div>
      <Card noshadow p="0" {...props}>
        <HeaderTitle
          title="Songs"
          bg="info500"
          align="center"
          textColor="white"
          h="4rem"
        />
      </Card>
      <Card
        h={!isMobile() ? "80vh" : "30rem"}
        justify="flex-start"
        m="0"
        overflow="auto"
        scroll-y="hidden"
      >
        <SongList songs={songs} />
      </Card>
    </Div>
  );
};

const SongList = ({ songs }) => (
  <CenteredView flexDir="column" p="0">
    {songs?.map((song, i) => (
      <SongView song={song} key={i} />
    ))}
  </CenteredView>
);

const SongView = ({ song }) => (
  <Card
    w="100%"
    h="100%"
    noshadow
    d="flex"
    flexDir="row"
    justify="space-between"
  >
    <Div
      h="50px"
      d="flex"
      flexDir="column"
      align="flex-start"
      justify="space-between"
    >
      <Text fontFamily="primary" textWeight="500">
        {song.title}
      </Text>
      <Text fontFamily="primary" textWeight="300">
        {song.album}
      </Text>
    </Div>
    <Div d="flex" flexDir="row" align="center" justify="flex-end">
      <Button
        name="Play"
        size={isDesktop() ? "32px" : "28px"}
        rounded="circle"
        bg="success600"
        m={{ r: ".5rem" }}
        hoverBg="success700"
        color="white"
        onClick={null}
      />
      <Button
        hoverBg="transparent"
        name="Plus"
        size={isDesktop() ? "32px" : "28px"}
        rounded="lg"
        m={{ l: ".5rem" }}
        color="info700"
        onClick={() => console.log("clicked")}
      />
    </Div>
  </Card>
);

export default SongListView;
