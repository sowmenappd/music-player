import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "index.css";
import reportWebVitals from "./reportWebVitals";

import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Div, ThemeProvider } from "atomize";
import { isDesktop } from "hooks/useDevice";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

const theme = {
  fontFamily: {
    primary: "Roboto",
    secondary: "Roboto",
  },
};

// 2. Provide the engine to the app
// debug engine needs inlined source maps
ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <Div
      w="100vw"
      h={isDesktop() ? "100vh" : "100%"}
      bg="#252737"
      p="0rem"
      m="0rem"
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Div>
  </StyletronProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
