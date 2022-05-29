import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import TinderCard from "react-tinder-card";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // adaptiveHeight: true,
  // arrows: false,
};

const Home = () => {
  const navigate = useNavigate();

  const [tab, setTab] = React.useState<string>("home");

  const onSwipe = (direction: any) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(myIdentifier + " left the screen");
  };

  const getImg = (tab: string) => {
    let result = "";
    if (tab === "home") {
      result = process.env.PUBLIC_URL + "/static/images/home.png";
    } else if (tab === "instruction") {
      result = process.env.PUBLIC_URL + "/static/images/blank-paper.png";
    } else if (tab === "score") {
      result = process.env.PUBLIC_URL + "/static/images/blank-paper.png";
    } else if (tab === "about") {
      result = process.env.PUBLIC_URL + "/static/images/blank-paper.png";
    }
    return result;
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      {/* @ts-ignore */}
      <TinderCard
        className="tinder-card"
        flickOnSwipe={false}
        preventSwipe={["bottom"]}
      >
        <Box
          sx={{
            height: "100%",
            width: "auto",
            display: "flex",
            justifyContent: "center",

            position: "relative",
          }}
        >
          <Box>
            <img
              src={process.env.PUBLIC_URL + "/static/images/home.png"}
              alt="home"
              style={{
                height: "100%",
                width: "auto",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "auto",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Box
              sx={{
                width: "36px",
                height: "auto",
                position: "absolute",
                left: "4%",

                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              <img
                src={
                  process.env.PUBLIC_URL + "/static/images/sas-crown-icon.png"
                }
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{
            position: "absolute",
            top: "1.3%",
            left: "43.5%",
          }}
        >
          <Typography
            onClick={() => navigate("/instruction")}
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
            onClick={() => navigate("/leaderboard")}
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
            onClick={() => navigate("/about")}
            style={{
              color: tab === "about" ? "yellow" : "white",
              textDecoration: "none",

              fontSize: "16px",

              cursor: "pointer",
            }}
          >
            About
          </Typography>
        </Stack>
      </TinderCard>
    </Box>
  );
};

export default Home;
