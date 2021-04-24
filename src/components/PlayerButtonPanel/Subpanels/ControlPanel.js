import { Div } from "atomize";

import Button from "../../Button";

const ControlPanel = ({ paused, size, playHandler }) => (
  <Div d="flex" flexDir="row" align="center" justify="flex-start">
    <Button name="PlayPrev" size={size} />
    <Button
      name={paused ? "Pause" : "Play"}
      size={size}
      rounded="circle"
      onClick={() => playHandler(!paused)}
    />
    <Button name="PlayNext" size={size} />
  </Div>
);

export default ControlPanel;
