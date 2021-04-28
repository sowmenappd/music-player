import React from "react";
import { Col, Div, Icon, Row, Text } from "atomize";

import { Flex, Modal } from "components";
import { isDesktop } from "hooks/useDevice";

const CategoryContentPanel = ({ displayCategory, isOpen, onClose }) => {
  return (
    <Div overflow="scroll">
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        bg="#272537"
        textColor="#fff"
        fontFamily="primary"
        cancelIconProps={{ color: "#fff", size: "24px" }}
      >
        <Flex col justify="space-between">
          <Flex m={{ y: isDesktop() ? "2rem" : "1rem" }}>
            <Text tag="h1" p={{ l: "0.5rem", t: "0.25rem" }}>
              {displayCategory}
            </Text>
          </Flex>

          <Flex
            col
            w="100%"
            h={isDesktop() ? "40rem" : "35rem"}
            p="1rem"
            bg="#2f2d4540"
            rounded="lg"
            overflow="scroll"
          >
            {[
              ["30 Seconds To Mars", "Linkin Park", "Blink-182"],
              ["Warfaze", "30 Seconds To Mars", "Linkin Park"],
              ["Blink-182", "Warfaze", "Warfaze"],
              ["30 Seconds To Mars", "Linkin Park", "Blink-182"],
              ["Warfaze", "30 Seconds To Mars", "Linkin Park"],
              ["Blink-182", "Warfaze", "Warfaze"],
              ["30 Seconds To Mars", "Linkin Park", "Blink-182"],
              ["Warfaze", "30 Seconds To Mars", "Linkin Park"],
              ["Blink-182", "Warfaze", "Warfaze"],
              ["30 Seconds To Mars", "Linkin Park", "Blink-182"],
              ["Warfaze", "30 Seconds To Mars", "Linkin Park"],
              ["Blink-182", "Warfaze"],
            ].map((artistSet) => {
              return (
                <Row align="flex-start">
                  {artistSet.map((artist) => (
                    <Col size={4}>
                      <Flex col align="center">
                        <Icon name="UserCircle" color="white" size="6rem" />
                        <Text
                          fontFamily="primary"
                          textAlign="center"
                          tag="h4"
                          m="1rem"
                        >
                          {artist}
                        </Text>
                      </Flex>
                    </Col>
                  ))}
                </Row>
              );
            })}
          </Flex>
        </Flex>
      </Modal>
    </Div>
  );
};

export default CategoryContentPanel;
