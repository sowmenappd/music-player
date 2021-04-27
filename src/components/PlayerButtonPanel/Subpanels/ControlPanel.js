import { Button, Flex } from "components";

const ControlPanel = ({ paused, size, playHandler }) => (
  <Flex w="" align="center" justify="flex-start">
    <Button name="PlayPrev" size={size} />
    <Button
      name={!paused ? "Pause" : "Play"}
      size={size}
      rounded="circle"
      onClick={() => playHandler(!paused)}
    />
    <Button name="PlayNext" size={size} />
  </Flex>
);

export default ControlPanel;
