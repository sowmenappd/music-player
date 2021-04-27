import React from "react";
import { Div, Collapse as Colp, Tag, Anchor, Icon } from "atomize";

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
      <Div d="flex" flexDir="column" bg="transparent" rounded="xl">
        {this.props.button}
        <Colp isOpen={showCollapse} {...collapseProps} justify="flex-end">
          {children && (
            <Div bg="gray100" rounded="xl" {...bgProps}>
              {children.map((name, index) => (
                <Div key={index} d="flex" {...this.props.cellProps(index)}>
                  {name}
                </Div>
              ))}
            </Div>
          )}
        </Colp>
      </Div>
    );
  }
}
