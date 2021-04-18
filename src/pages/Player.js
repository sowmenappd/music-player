import { Text } from "atomize";
import React from "react";
import CenteredView from "../components/CenteredView";

export default function Player() {
  return (
    <CenteredView>
      <Text fontFamily="primary" tag="h2">
        Player screen
      </Text>
    </CenteredView>
  );
}
