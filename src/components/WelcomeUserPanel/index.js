import React from "react";
import { Div, Image, Text } from "atomize";

import { CustomCard, Flex } from "components";
import IMAGES from "constants/images";
import { isMobile } from "hooks/useDevice";

const WelcomeUserPanel = ({ ...props }) => {
  return (
    <CustomCard bg="#553EB566" p="0rem" {...props}>
      <Flex
        h="10rem"
        justify="space-between"
        align="center"
        overflow="hidden"
        textColor="white"
      >
        <Flex w="" col justify="space-evenly" p="1rem">
          <Div>
            <Text fontFamily="primary" tag="h1" textWeight="300">
              Hello, <b>Sowmen</b>
            </Text>
          </Div>
          <Flex col justify="space-evenly" p={{ t: "1rem" }}>
            <Text
              fontFamily="primary"
              tag="h2"
              textAlign="left"
              textWeight="400"
            >
              Tuesday
            </Text>
            <Text
              fontFamily="primary"
              tag="h2"
              textAlign="left"
              textWeight="300"
            >
              4.56<b style={{ paddingLeft: ".24rem" }}>PM</b>
            </Text>
          </Flex>
        </Flex>
        <Div
          w={isMobile() ? "8rem" : "12rem"}
          p={{ t: isMobile() ? "4rem" : "2rem" }}
        >
          <Image src={IMAGES.music_walk} />
        </Div>
      </Flex>
    </CustomCard>
  );
};

export default WelcomeUserPanel;
