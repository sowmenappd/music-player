import React from "react";
import { Div, Image, Text } from "atomize";

import { CustomCard } from "components";
import IMAGES from "constants/images";
import { isMobile } from "hooks/useDevice";

const WelcomeUserPanel = ({ ...props }) => {
  return (
    <CustomCard bg="#553EB566" p="0rem" {...props}>
      <Div
        d="flex"
        flexDir="row"
        w="100%"
        h="10rem"
        justify="space-between"
        align="center"
        overflow="hidden"
        textColor="white"
      >
        <Div d="flex" flexDir="column" justify="space-evenly" h="100%" p="1rem">
          <Div>
            <Text fontFamily="primary" tag="h1" textWeight="300">
              Hello, <b>Sowmen</b>
            </Text>
          </Div>
          <Div
            d="flex"
            flexDir="column"
            justify="space-evenly"
            p={{ t: "1rem" }}
          >
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
          </Div>
        </Div>
        <Div
          w={isMobile() ? "8rem" : "12rem"}
          p={{ t: isMobile() ? "4rem" : "2rem" }}
        >
          <Image src={IMAGES.music_walk} />
        </Div>
      </Div>
    </CustomCard>
  );
};

export default WelcomeUserPanel;
