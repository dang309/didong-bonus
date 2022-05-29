import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { data } from "../constants/data";
import TinderCard from "react-tinder-card";

type MouseCoordinateType = {
  x: number;
  y: number;
};

const Game = () => {
  const navigate = useNavigate();

  const [questionIdx, setQuestionIdx] = React.useState<number>(0);

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
  return (
    <Box
      sx={{
        height: "100%",
        width: "auto",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* @ts-ignore */}
        <TinderCard
          key={data[questionIdx].id}
          className="tinder-card-game"
          swipeRequirementType="position"
        >
          <Box sx={{ height: "100%", width: "auto" }}>
            <img
              src={data[questionIdx].img}
              alt=""
              style={{ height: "100%", width: " auto" }}
            />
          </Box>

          {/* Dialog */}
          <Box
            sx={{
              height: "auto",
              width: "100%",
              position: "absolute",
              top: "8%",
              left: 0,
              zIndex: 2,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <img
                src={
                  process.env.PUBLIC_URL + "/static/images/game/dialog-box.png"
                }
                alt=""
                style={{ height: "auto", width: "100%" }}
              />

              <Box sx={{ position: "absolute", top: "8%", left: "4%" }}>
                <Typography>{data[questionIdx].dialogContent}</Typography>
              </Box>
            </Box>
          </Box>

          {/* Question */}
          <Box
            sx={{
              height: "auto",
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/static/images/game/help-box.png"
                  }
                  alt=""
                  style={{ height: "auto", width: "100%" }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  zIndex: 999,
                  width: "100%",
                  height: "100%",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "80%", height: "80%" }}>
                  <Typography sx={{ paddingLeft: 2 }}>
                    {data[questionIdx].question}
                  </Typography>

                  <Box />
                </Box>

                <Box>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/static/images/game/joker.png"
                    }
                    alt=""
                    style={{ height: "100%", width: "64px" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: "auto",
              width: "32px",
              position: "absolute",
              top: "1%",
              left: "6%",
              zIndex: 999,
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/static/images/sas-crown-icon.png"}
              alt=""
              style={{ height: "auto", width: "100%" }}
            />
          </Box>
        </TinderCard>

        {/* <Box
          sx={{
            position: "absolute",
            top: "10%",
            height: "80%",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          here
        </Box> */}

        <Box
          sx={{
            width: "100%",
            position: "absolute",
            top: "0.4%",
            left: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "85%",
              height: "auto",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// onMouseDown={(e) =>
//   setMouseCoordinate((prev) => ({
//     ...prev,
//     x: e.clientX,
//     y: e.clientY,
//   }))
// }

export default Game;
