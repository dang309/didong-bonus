import React from "react";

import { Box, Stack } from "@mui/material";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";

import Draggable from "react-draggable";

const Home = () => {
  const navigate = useNavigate();

  const [tab, setTab] = React.useState<string>("home");

  const getImg = (tab: string) => {
    let result = "";
    if (tab === "home") {
      result = process.env.PUBLIC_URL + "/static/images/home.png";
    } else if (tab === "instruction") {
      result = process.env.PUBLIC_URL + "/static/images/instruction.png";
    } else if (tab === "score") {
      result = process.env.PUBLIC_URL + "/static/images/instruction.png";
    } else if (tab === "about") {
      result = process.env.PUBLIC_URL + "/static/images/instruction.png";
    }
    return result;
  };

  const handleStartDrag = (e: React.DragEvent<HTMLImageElement>) => {
    console.log("Start", e);
  };

  const handleEndDrag = (e: React.DragEvent<HTMLImageElement>) => {
    console.log("End", e);
  };

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      // onStart={(e) => console.log(e)}
      handle="#handle"
      position={undefined}
      grid={[25, 25]}
      scale={1}
    >
      <Box
        sx={{
          height: "95%",
          width: "100%",
        }}
        id="handle"
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={getImg(tab)}
            alt="home"
            style={{
              height: "100%",
              width: "auto",

              // position: "absolute",
              // top: "50%",
              // left: "50%",

              // transform: "translate(-50%, -50%)",
            }}
          />
        </Box>

        {/* <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{ position: "absolute", top: "2.2%", left: "30%" }}
        >
          <Typography
            onClick={() => setTab("instruction")}
            style={{
              color: tab === "instruction" ? "yellow" : "white",
              textDecoration: "none",

              fontSize: "16px",

              cursor: "pointer",
            }}
          >
            Instruction
          </Typography>
          <Typography
            onClick={() => setTab("score")}
            style={{
              color: tab === "score" ? "yellow" : "white",
              textDecoration: "none",

              fontSize: "16px",

              cursor: "pointer",
            }}
          >
            Score
          </Typography>
          <Typography
            onClick={() => setTab("about")}
            style={{
              color: tab === "about" ? "yellow" : "white",
              textDecoration: "none",

              fontSize: "16px",

              cursor: "pointer",
            }}
          >
            About
          </Typography>
        </Stack> */}
      </Box>
    </Draggable>
  );
};

export default Home;
