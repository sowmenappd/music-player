import React from "react";
import { Div, Collapse as Colp } from "atomize";

import { Flex } from "components";

export default class Collapse extends React.Component {
  render() {
    const {
      showCollapse,
      horizontalLayout,
      collapseProps,
      bgProps,
    } = this.props;
    const children = this.props.children;

    return (
      <Flex col bg="transparent" rounded="xl">
        {this.props.button}
        <Colp isOpen={showCollapse} {...collapseProps} justify="flex-end">
          {children && (
            <Div bg="gray100" rounded="xl" {...bgProps}>
              {children.map((name, index) => (
                <Flex key={index} {...this.props.cellProps(index)}>
                  {name}
                </Flex>
              ))}
            </Div>
          )}
        </Colp>
      </Flex>
    );
  }
}
