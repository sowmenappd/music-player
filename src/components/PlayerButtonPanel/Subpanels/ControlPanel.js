import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

import { Button, Flex } from "components";

const ControlPanel = ({
  paused,
  volume,
  size,
  playHandler,
  onChangeVolume,
}) => (
  <Flex w="" col>
    <Flex align="center" justify="flex-start">
      <Button name="PlayPrev" size={size} />
      <Button
        name={!paused ? "Pause" : "Play"}
        size={size}
        rounded="circle"
        onClick={() => playHandler(!paused)}
      />
      <Button name="PlayNext" size={size} />
    </Flex>
    <Flex>
      <RangeSlider
        value={volume}
        tooltip="off"
        onChange={({ target: { value } }) => {
          onChangeVolume?.(value);
        }}
      />
    </Flex>
  </Flex>
);

export default ControlPanel;
