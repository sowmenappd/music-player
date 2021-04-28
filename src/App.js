import { Div } from "atomize";
import Player from "layout/Player";

function App() {
  return (
    <Div
      pos="absolute"
      bg="#252737"
      w="100vw"
      h="100vh"
      overflow="scroll"
      style={{ marginBottom: "230px" }}
    >
      <Player />
    </Div>
  );
}

export default App;
