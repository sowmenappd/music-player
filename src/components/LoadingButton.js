import React from "react";
import { Button, Icon } from "atomize";

export default class LoadingButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: this.props.isLoading || false,
    };
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        onClick={() => this.setState({ isLoading: true })}
        disabled={isLoading}
        w={this.props.w || "100%"}
        prefix={
          this.props.iconProps && (
            <Icon
              name={isLoading ? "Loading" : this.props.iconProps.iconName}
              pos="absolute"
              top="50%"
              left="1rem"
              transform="translateY(-50%)"
              size="18px"
              color="white"
              m={{ r: "0.5rem" }}
              {...this.props.iconProps}
            />
          )
        }
        rounded={this.props.rounded || "xs"}
        p={{ l: "3rem", r: "2rem" }}
        m={{ y: "2rem", ...this.props.m }}
        {...this.props.textProps}
        {...this.props.buttonProps}
      >
        {isLoading
          ? this.props.textProps.loadingText
          : this.props.textProps.text}
      </Button>
    );
  }
}
