import React from "react";

import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function createData(name: number, calories: string, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData(2, "Ice cream sandwich", 237),
  createData(2, "Ice cream sandwich", 237),
];

const Leaderboard = () => {
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
            height: "80%",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack direction="column" alignItems="center" spacing={-1}>
            <Typography variant="h4" component="h4">
              TOP BEST KING
            </Typography>

            <Typography variant="h6" component="h6">
              OF ALL TIME
            </Typography>
          </Stack>

          <TableContainer sx={{ width: "85%", margin: "16px 0 16px 0" }}>
            <Table
              size="small"
              aria-label="simple table"
              sx={{ background: "#ffeed7" }}
            >
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        textAlign: "center",

                        borderBottom: "1px solid #000",
                        borderTop: "1px solid #000",

                        fontSize: "1rem",

                        letterSpacing: "0",

                        lineHeight: "2",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",

                        border: "1px solid #000",

                        fontSize: "1rem",

                        letterSpacing: "0",

                        lineHeight: "2",
                      }}
                    >
                      {row.calories}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",

                        borderBottom: "1px solid #000",
                        borderTop: "1px solid #000",

                        fontSize: "1rem",

                        letterSpacing: "0",

                        lineHeight: "2",
                      }}
                    >
                      {row.fat}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: " 85%" }}
          >
            <Stack direction="column" alignItems="center">
              <Box sx={{ width: "64px" }}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/static/images/buttons/shopbtn.png"
                  }
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>

              <Typography variant="body1">Shop</Typography>
            </Stack>

            <Stack direction="column" alignItems="center">
              <Box sx={{ width: "64px" }}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/static/images/buttons/replaybtn.png"
                  }
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>

              <Typography variant="body1">Shop</Typography>
            </Stack>

            <Stack direction="column" alignItems="center">
              <Box sx={{ width: "64px" }}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/static/images/buttons/sharebtn.png"
                  }
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>

              <Typography variant="body1">Shop</Typography>
            </Stack>
          </Stack>
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

export default Leaderboard;
