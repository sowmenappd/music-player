import React from "react";
import { Container } from "atomize";

const CenteredView = ({ children, ...props }) => {
  return (
    <Container d="flex" justify="center" align="center" {...props}>
      {children}
    </Container>
  );
};

export default CenteredView;
