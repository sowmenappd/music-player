import React from "react";
import { Container } from "atomize";

export default function CenteredView({ children, ...props }) {
  return (
    <Container d="flex" justify="center" align="center" {...props}>
      {children}
    </Container>
  );
}
