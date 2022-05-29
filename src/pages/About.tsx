import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { useNavigate } from "react-router-dom";

const authors = [
  "André Calderolli, Brazil",
  "Bianca Chueng, Brazil",
  "Dang Trung Nguyen, Vietnam",
  "Fernanda De Alba, Mexico",
  "Johannes Longardt, Germany",
  "Tim Olbrich, Germany",
];

const About = () => {
  const navigate = useNavigate();
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
            left: "4%",
            height: "100%",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "80%",
              width: "85%",
            }}
          >
            <Stack
              direction="column"
              spacing={2}
              sx={{ maxHeight: "100%", overflowY: "auto" }}
            >
              <Stack>
                <Typography variant="h6" component="h6">
                  Project
                </Typography>

                <Typography variant="body1" component="p">
                  “Dear as Salt” is a web-based game inspired by the tale Dear
                  as salt (or Bene come il sale, in italian) from Italo
                  Calvino’s Italian Fables, published for the first time in
                  1956. The story originally comes from Bologna and, telling the
                  story of a young princess banished by her father, is able to
                  draw attention to the power of misunderstandings, but also to
                  every kitchen’s must: salt, no less.
                </Typography>
              </Stack>

              <Stack>
                <Typography variant="h6" component="h6">
                  Content
                </Typography>

                <Typography variant="body1" component="p">
                  In the game, you are the king and make your choices with the
                  goal of reigning the kingdom as well as possible. Because salt
                  is the most important element in the story, many of the
                  choices you can revolve around it. You will meet many of the
                  characters from the tale as well as someones, like a wizard or
                  an alchemist, who will appear randomly. If your choices
                  benefit the people of your kingdom as well as the economy, you
                  will be rewarded with a good final score.
                </Typography>
              </Stack>

              <Stack>
                <Typography variant="h6" component="h6">
                  ·Team
                </Typography>

                <Typography variant="body1" component="p">
                  We are Teotihuacan, one of the groups of the Sociology of
                  Media class for the academic year of 2019/2020 of the
                  Communication Design Master of Science Program. We come from
                  different countries and different academic backgrounds.
                </Typography>

                <List>
                  {authors.map((author, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <FiberManualRecordIcon
                            htmlColor="#000"
                            sx={{ fontSize: "12px" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={author} />
                      </ListItem>
                    );
                  })}
                </List>
              </Stack>
            </Stack>
          </Box>
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

            <Stack direction="row" alignItems="center" spacing={4} sx={{}}>
              <Typography
                onClick={() => navigate("/instruction")}
                style={{
                  color: true ? "yellow" : "white",
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
                  color: true ? "yellow" : "white",
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
                  color: true ? "yellow" : "white",
                  textDecoration: "none",

                  fontSize: "16px",

                  cursor: "pointer",
                }}
              >
                About
              </Typography>
            </Stack>

            <Box />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
