import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import TinderCard from "react-tinder-card";

import Slider from "react-slick";
import Nav from "../components/Nav";

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

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

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
        onSwipe={() => navigate("/game")}
        swipeRequirementType="position"
        swipeThreshold={128}
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
            {loading ? (
              <img
                src={process.env.PUBLIC_URL + "/static/images/loading.png"}
                alt="home"
                style={{
                  height: "100%",
                  width: "auto",
                }}
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/static/images/home.png"}
                alt="home"
                style={{
                  height: "100%",
                  width: "auto",
                }}
              />
            )}
          </Box>

          {!loading && (
            <Box
              sx={{
                width: "100%",
                position: "absolute",
                top: "0.19%",
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
                <Box
                  sx={{
                    width: "36px",
                    height: "auto",

                    cursor: "pointer",

                    display: "flex",
                    alignItems: " center",
                  }}
                  onClick={() => navigate("/")}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/static/images/sas-crown-icon.png"
                    }
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>

                <Nav />

                <Box />
              </Box>
            </Box>
          )}
        </Box>
      </TinderCard>
    </Box>
  );
};

export default Home;
