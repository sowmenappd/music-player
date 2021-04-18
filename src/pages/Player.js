import { Col, Div, Row, Text } from "atomize";
import React from "react";
import Card from "../components/Card";
import CenteredView from "../components/CenteredView";

export default function Player() {
  return (
    <CenteredView w="100vw">
      <Row w="100%">
        <Col size="6">
          <Card w="100%" h="100%">
            <Text fontFamily="primary" tag="h2">
              Player screen
            </Text>
          </Card>
        </Col>
        <Col size="6">
          <Card w="100%" h="100%">
            <Text fontFamily="primary" tag="h2">
              Player screen
            </Text>
          </Card>
        </Col>
      </Row>
    </CenteredView>
  );
}
