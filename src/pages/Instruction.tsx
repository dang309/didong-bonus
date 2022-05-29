import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { useNavigate, useLocation, matchPath } from "react-router-dom";

import Slider from "react-slick";

import Nav from "../components/Nav";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // adaptiveHeight: true,
  arrows: false,
};

const Instruction = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        width: "auto",
      }}
    >
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
        <Box
          sx={{
            height: "100%",
            width: "auto",
            display: "flex",
            justifyContent: "center",

            position: "relative",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/static/images/blank-paper.png"}
            alt="home"
            style={{
              height: "100%",
              width: "auto",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "10%",
              height: "80%",
              width: "100%",
            }}
          >
            <Slider {...settings}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex !important",
                  justifyContent: "center",

                  textAlign: "center",
                }}
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "/static/images/instructions-1.png"
                  }
                  alt=""
                  style={{
                    // height: "100%",
                    width: "85%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex !important",
                  justifyContent: "center",

                  textAlign: "center",
                }}
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "/static/images/instructions-2.png"
                  }
                  alt=""
                  style={{
                    // height: "100%",
                    width: "85%",
                  }}
                />
              </Box>
            </Slider>
          </Box>

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
                    process.env.PUBLIC_URL + "/static/images/sas-crown-icon.png"
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
        </Box>
      )}
    </Box>
  );
};

export default Instruction;
