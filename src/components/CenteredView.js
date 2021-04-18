import React from "react";
import { Container } from "atomize";

export default function CenteredView({ children }) {
  return (
    <Container d="flex" justify="center" align="center" h="100vh" w="100vw">
      {children}
    </Container>
  );
}
