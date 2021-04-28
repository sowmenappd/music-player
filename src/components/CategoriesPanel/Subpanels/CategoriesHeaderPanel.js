import React from "react";
import { Image, Text } from "atomize";
import { CustomCard, Button, Flex } from "components";
import IMAGES from "constants/images";

const HeaderSubpanel = ({ onBtnClick, ...props }) => {
  return (
    <CustomCard bg="#373537" {...props}>
      <Flex h="10rem" overflow="hidden">
        <Flex col justify="space-between">
          <TopText />
          <CategoryButtonList
            onBtnClick={onBtnClick}
            listItems={[
              {
                title: "Artists",
                color: "info",
                iconName: "UserSolid",
                iconColor: "white",
              },
              {
                title: "Albums",
                color: "success",
                iconName: "EyeSolid",
                iconColor: "white",
              },
              {
                title: "Genres",
                color: "brand",
                iconName: "EyeSolid",
                iconColor: "white",
              },
            ]}
            m={{ t: "1rem", l: "1rem" }}
          />
        </Flex>
        <Flex w="100%" h="60%" p="0rem" justify="flex-end" align="flex-start">
          <Image w="50%" src={IMAGES.collection} />
        </Flex>
      </Flex>
    </CustomCard>
  );
};

const TopText = () => (
  <Flex h="5rem" justify="space-between" overflow="hidden">
    <Flex col justify="space-around">
      <Text
        fontFamily="primary"
        tag="h2"
        textAlign="left"
        textColor="white"
        textWeight="500"
      >
        Gallery
      </Text>
      <Text
        fontFamily="primary"
        tag="h3"
        textAlign="left"
        textColor="white"
        textWeight="300"
      >
        Filter songs by artist, genre, and albums.
      </Text>
    </Flex>
  </Flex>
);

const CategoryButtonList = ({ onBtnClick, listItems, ...props }) => {
  return (
    listItems && (
      <Flex h="3rem" justify="flex-start" {...props}>
        {listItems.map((item, i) => (
          <Button
            key={i}
            name={item.iconName}
            text={item.title}
            onClick={() => onBtnClick?.(item.title)}
            rounded="circle"
            size="16px"
            iconColor={item.iconColor}
            bg={`${item.color}700`}
            hoverBg={`${item.color}800`}
            m={{ r: ".5rem" }}
            textProps={{ m: { l: ".5rem" }, p: { t: "0.1rem" } }}
          />
        ))}
      </Flex>
    )
  );
};

export default HeaderSubpanel;
