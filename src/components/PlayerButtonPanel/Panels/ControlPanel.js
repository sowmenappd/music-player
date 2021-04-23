import { Div } from "atomize";

import PlayerControlButton from "../PlayerControlButton";

const ControlPanel = ({ paused, size, playHandler }) => (
  <Div d="flex" flexDir="row" align="center" justify="flex-start">
    <PlayerControlButton name="PlayPrev" size={size} />
    <PlayerControlButton
      name={paused ? "Pause" : "Play"}
      size={size}
      rounded="circle"
      onClick={() => playHandler(!paused)}
    />
    <PlayerControlButton name="PlayNext" size={size} />
  </Div>
);

export default ControlPanel;
