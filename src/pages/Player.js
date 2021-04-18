import { Col, Row, Text } from "atomize";
import React from "react";
import Card from "../components/Card";
import CenteredView from "../components/CenteredView";
import LoadingButton from "../components/LoadingButton";

export default function Player() {
  return (
    <CenteredView w="98vw">
      <Row w="100%">
        {/* <Col size="4">
          <Card w="100%" h="100%">
            <Text fontFamily="primary" tag="h2">
              Player screen
            </Text>
          </Card>
        </Col> */}
        <Col>
          <Card>
            {/* w="100%" h="100%" */}
            <Text fontFamily="primary" tag="h2">
              Player screen
            </Text>
          </Card>
        </Col>
      </Row>
    </CenteredView>
  );
}
