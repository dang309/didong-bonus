import React from "react";

import {
  Backdrop,
  Box,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";

import { data } from "../constants/data";
import TinderCard from "react-tinder-card";

import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import _shuffle from "lodash/shuffle";
import { useNavigate } from "react-router-dom";
import { TTopUser } from "../types";

type MouseCoordinateType = {
  x: number;
  y: number;
};

const Game = () => {
  const navigate = useNavigate();

  const tenRandomQuestions = React.useRef(_shuffle(data).slice(0, 10));

  const [questionIdx, setQuestionIdx] = React.useState<number>(0);
  const [showHint, setShowHint] = React.useState<boolean>(false);
  const [showSubmitBg, setShowSubmitBg] = React.useState<boolean>(false);

  const [score, setScore] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("");

  const [error, setError] = React.useState<string>("");

  const handleSwipe = (dir: string) => {
    switch (dir) {
      case "right":
        setScore(
          (prev) => prev + tenRandomQuestions.current[questionIdx].answer.yes
        );
        setQuestionIdx((prev) => prev + 1);
        break;
      case "left":
        setScore(
          (prev) => prev + tenRandomQuestions.current[questionIdx].answer.no
        );
        setQuestionIdx((prev) => prev + 1);
        break;
      case "up":
        setShowHint(true);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setError("");
    if (!name) {
      setError("Name is required!");
      return;
    }

    const topUsers = sessionStorage.getItem("top-users");

    if (topUsers) {
      let temp = JSON.parse(topUsers);
      if (temp.some((o: TTopUser) => o.name === name)) {
        setError("Name has already existed!");
        return;
      }
      temp.push({
        name,
        score,
      });

      sessionStorage.setItem("top-users", JSON.stringify(temp));
    } else {
      let data = [];
      data.push({
        name,
        score,
      });

      sessionStorage.setItem("top-users", JSON.stringify(data));
    }

    setError("");

    navigate("/leaderboard");
  };

  React.useEffect(() => {
    if (questionIdx === 9) {
      setShowSubmitBg(true);
    }
  }, [questionIdx]);

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
          key={tenRandomQuestions.current[questionIdx].id}
          className="tinder-card-game"
          flickOnSwipe={false}
          swipeRequirementType="position"
          onSwipe={handleSwipe}
        >
          <Box sx={{ height: "100%", width: "auto" }}>
            {showSubmitBg ? (
              <img
                src={
                  process.env.PUBLIC_URL + "/static/images/characters/king.png"
                }
                alt=""
                style={{ height: "100%", width: " auto" }}
              />
            ) : (
              <img
                src={tenRandomQuestions.current[questionIdx].img}
                alt=""
                style={{ height: "100%", width: " auto" }}
              />
            )}
          </Box>

          {/* Dialog */}
          <Box
            sx={{
              height: "auto",
              width: "100%",
              position: "absolute",
              top: "8%",
              left: 0,
              zIndex: showHint ? 0 : 2,
            }}
          >
            {!showSubmitBg && (
              <Box sx={{ position: "relative" }}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/static/images/game/dialog-box.png"
                  }
                  alt=""
                  style={{ height: "auto", width: "100%" }}
                />

                <Box sx={{ position: "absolute", top: "8%", left: "4%" }}>
                  <Typography
                    sx={{ fontFamily: "Trattatello", fontSize: "16px" }}
                  >
                    {tenRandomQuestions.current[questionIdx].dialogContent}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>

          {/* Question */}
          {!showSubmitBg && (
            <Box
              sx={{
                height: "auto",
                width: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: showHint ? 0 : 2,
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
                      process.env.PUBLIC_URL +
                      "/static/images/game/help-box.png"
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
                    zIndex: showHint ? 0 : 999,
                    width: "100%",
                    height: "100%",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "70%",
                      height: "80%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Trattatello",
                        fontSize: "16px",
                      }}
                    >
                      {tenRandomQuestions.current[questionIdx].question}
                    </Typography>
                  </Box>

                  <Box onClick={() => setShowHint(true)}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/static/images/game/${
                          showHint ? "joker" : "joker-up"
                        }.png`
                      }
                      alt=""
                      style={{ height: "100%", width: "64px" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {!showSubmitBg && (
            <Box
              sx={{
                height: "auto",
                width: "32px",
                position: "absolute",
                top: "1%",
                left: `${6 + questionIdx * 9}%`,
                zIndex: showHint ? 0 : 999,
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL + "/static/images/sas-crown-icon.png"
                }
                alt=""
                style={{ height: "auto", width: "100%" }}
              />
            </Box>
          )}

          <Backdrop open={showHint} onClick={() => setShowHint(false)}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <img
                  src={
                    process.env.PUBLIC_URL + "/static/images/game/help-box.png"
                  }
                  alt=""
                  style={{ height: "auto", width: "300px" }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  zIndex: showHint ? 0 : 999,
                  width: "100%",
                  height: "100%",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <TipsAndUpdatesIcon htmlColor="#FBCB0A" />
                    <Typography
                      sx={{
                        fontFamily: "Trattatello",
                        fontSize: "16px",
                      }}
                    >
                      {data[questionIdx].info}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Backdrop>
        </TinderCard>

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

      <Backdrop open={showSubmitBg}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src={
                process.env.PUBLIC_URL +
                "/static/images/game/game-submit-bg.png"
              }
              alt=""
              style={{ height: "auto", width: "324px" }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: showHint ? 0 : 999,
              width: "100%",
              height: "100%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "90%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Stack direction="column" alignItems="center" spacing={2}>
                <Stack direction="column" alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Trattatello",
                    }}
                  >
                    CONGRATULATIONS
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Trattatello",
                    }}
                  >
                    You're a good and gracious king.
                  </Typography>
                </Stack>

                <Stack
                  direction="column"
                  alignItems="center"
                  spacing={1}
                  sx={{ width: "100%" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Trattatello",
                    }}
                  >
                    Your Score: {score}
                  </Typography>

                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Name"
                    inputProps={{
                      style: {
                        fontFamily: "EnchantedLand",
                        fontSize: "24px",
                      },
                    }}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError("");
                    }}
                    error={error.length > 0}
                    helperText={error.length > 0 && error}
                  />

                  <Link
                    sx={{
                      fontFamily: "EnchantedLand",
                      fontSize: "20px",

                      color: "#000",

                      textDecorationColor: "#000",

                      cursor: "pointer",
                    }}
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default Game;
