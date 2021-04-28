import React, { useState } from "react";
import { Div, Icon, Image, Text } from "atomize";
import CustomScroller from "react-custom-scroller";

import {
  Button,
  Card,
  CustomCard,
  CenteredView,
  Flex,
  HeaderTitle,
} from "components";
import { isDesktop, isMobile } from "hooks/useDevice";
import IMAGES from "constants/images";

const SongListView = ({ songs, currentSongId, ...props }) => {
  return (
    <Div>
      <Card p="0rem" {...props} bg="warning900">
        <HeaderTitle
          title="Up next"
          justify="flex-start"
          align="center"
          textColor="white"
          h="4rem"
        />
      </Card>
      <Card
        h={!isMobile() ? "80vh" : "30rem"}
        justify="flex-start"
        m={{ b: isMobile() ? "1rem" : "0rem" }}
        overflow="auto"
        scroll-y="hidden"
        bg="#2f2d4580"
        p="0rem"
        textColor="white"
      >
        <SongList songs={songs} currentSongId={currentSongId} />
      </Card>
    </Div>
  );
};

const SongList = ({ songs, currentSongId }) => (
  <CustomScroller
    style={{
      overflowY: "scroll",
      width: "100%",
      paddingLeft: 5,
      paddingRight: 0,
    }}
  >
    <CenteredView flexDir="column" p={{ r: "2rem" }} bg="transparent">
      {songs?.length ? (
        songs.map((song, i) => (
          <SongView song={song} key={i} isPlaying={currentSongId === i} />
        ))
      ) : (
        <EmptyView />
      )}
    </CenteredView>
  </CustomScroller>
);

const SongView = ({ song, isPlaying }) => {
  const [hovered, setHovering] = useState(false);

  return (
    <CustomCard
      justify="space-between"
      hoverShadow="4"
      hoverBg="#2f2d45"
      bg="clear"
      m={{ b: ".45rem" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Flex col h="50px" justify="space-between">
        <Flex align="center">
          <Text fontFamily="primary" textWeight="500">
            {song.title}
          </Text>
          {isPlaying && <Icon name="Loading3" m={{ l: ".35rem" }} />}
        </Flex>
        <Text fontFamily="primary" textWeight="300">
          {song.album}
        </Text>
      </Flex>
      {hovered && (
        <Flex align="center" justify="flex-end">
          <Button
            name="Play"
            size={isDesktop() ? "32px" : "28px"}
            h="3rem"
            w="3rem"
            rounded="circle"
            bg="success600"
            m={{ r: ".5rem" }}
            hoverBg="success700"
            iconColor="white"
            transition
            onClick={null}
          />
          <Button
            bg="transparent"
            hoverBg="transparent"
            hoverShadow="4"
            name="Plus"
            size={isDesktop() ? "32px" : "28px"}
            rounded="md"
            h="3rem"
            w="3rem"
            m={{ l: ".5rem" }}
            iconColor="white"
            transition
            onClick={null}
          />
        </Flex>
      )}
    </CustomCard>
  );
};

const EmptyView = () => (
  <Flex justify="center" align="center" p="2rem" col>
    <Image src={IMAGES.empty} m="3rem" w="140pt" />
    <Text fontFamily="primary" tag="h3" textWeight="300">
      No songs found
    </Text>
  </Flex>
);

export default SongListView;
