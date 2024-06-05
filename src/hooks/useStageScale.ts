import { KonvaEventObject } from "konva/lib/Node";
import { useState } from "react";

const SCALE_BORDER = { min: 0.1, max: 1 };
const SCALE_SPEED = 1.05;

export const useStageScale = () => {
  const [stagePos, setStagePos] = useState({ x: 0, y: 0 });
  const [stageScale, setStageScale] = useState(1);

  const onWheel = (e: KonvaEventObject<MouseEvent>) => {
    e.evt.preventDefault();

    const stage = e.target.getStage();

    if (!stage) return;

    const oldScale = stage.scaleX();
    const pointerPosition = stage?.getPointerPosition();

    if (!pointerPosition) return;

    const mousePointTo = {
      x: (pointerPosition.x - stage.x()) / oldScale,
      y: (pointerPosition.y - stage.y()) / oldScale,
    };

    console.log("pointerPosition", pointerPosition);
    console.log("mousePointTo", mousePointTo);
  };

  return { onWheel };
};
