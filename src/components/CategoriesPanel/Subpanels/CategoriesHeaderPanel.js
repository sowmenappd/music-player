import React from "react";
import { Text } from "atomize";
import { CustomCard, Button, Flex } from "components";

const HeaderSubpanel = ({ ...props }) => {
  return (
    <CustomCard bg="#373537" {...props} flexDir="column">
      <TopText />
      <CategoryButtonList
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
        m={{ t: "1rem", l: "2rem" }}
      />
    </CustomCard>
  );
};

const TopText = () => (
  <Flex h="5rem" col justify="space-around">
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
);

const CategoryButtonList = ({ listItems, ...props }) => {
  return (
    listItems && (
      <Flex h="3rem" justify="flex-start" {...props}>
        {listItems.map((item, i) => (
          <Button
            key={i}
            name={item.iconName}
            text={item.title}
            onClick={null}
            rounded="circle"
            size="16px"
            iconColor={item.iconColor}
            bg={`${item.color}700`}
            hoverBg={`${item.color}800`}
            p={{ r: "1.5rem", l: "1rem" }}
            m={{ r: ".5rem" }}
            shadow="3"
            hoverShadow="4"
            textProps={{ m: { l: ".5rem" }, p: { t: "0.1rem" } }}
          />
        ))}
      </Flex>
    )
  );
};

export default HeaderSubpanel;
