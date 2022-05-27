import React from "react";

type MouseCoordinateType = {
  x: number;
  y: number;
};

const Game = () => {
  const [mouseCoordinate, setMouseCoordinate] =
    React.useState<MouseCoordinateType>({
      x: 0,
      y: 0,
    });

  const [mouseCoordinateDragEnd, setMouseCoordinateDragEnd] =
    React.useState<MouseCoordinateType>({
      x: 0,
      y: 0,
    });
  const getDirection = (
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ) => {
    let result = "";
    const offsetX = endX - startX;
    const offsetY = endY - startY;
    if (offsetX >= 0) {
      result = "Yes";
    } else if (offsetX < 0) {
      result = "No";
    }
    return result;
  };
  return <div>Game</div>;
};

// onMouseDown={(e) =>
//   setMouseCoordinate((prev) => ({
//     ...prev,
//     x: e.clientX,
//     y: e.clientY,
//   }))
// }

export default Game;
