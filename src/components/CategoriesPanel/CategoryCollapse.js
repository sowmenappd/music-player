import React from "react";
import { Button, Div } from "atomize";
import { Collapse } from "components";

const CategoryCollapse = ({ showCollapse }) => {
  return (
    <Div justify="center" w="100%" m={{ t: "1rem" }}>
      <Collapse
        showCollapse={showCollapse}
        button={
          <Button onClick={() => setShow(!showCollapse)}>Expand library</Button>
        }
        buttonProps={{
          rounded: "circle",
          title: "Open categories",
        }}
        cellProps={(i) => ({
          p: { x: "2rem", y: "1.75rem" },
          border: { b: i !== 3 && "1px solid" },
          borderColor: "gray400",
          justify: "center",
        })}
        collapseProps={{
          justify: "left",
        }}
      >
        <Div>1</Div>
        <Div>2</Div>
        <Div>3</Div>
        <Div>1</Div>
      </Collapse>
    </Div>
  );
};

export default CategoryCollapse;
