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

import { useNavigate, useLocation } from "react-router-dom";

import Nav from "../components/Nav";
import { TTopUser } from "../types";

const Leaderboard = () => {
  const navigate = useNavigate();

  const rows = sessionStorage.getItem("top-users");

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
              height: "85%",
              width: "100%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack direction="column" alignItems="center" spacing={-1}>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontFamily: "Trattatello" }}
              >
                TOP BEST KING
              </Typography>

              <Typography
                variant="h6"
                component="h6"
                sx={{ fontFamily: "Trattatello" }}
              >
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
                  {rows &&
                    rows.length > 0 &&
                    JSON.parse(rows)
                      .sort((a: TTopUser, b: TTopUser) => b.score - a.score)
                      .slice(0, 10)
                      .map((row: TTopUser, index: number) => (
                        <TableRow key={row.name}>
                          <TableCell
                            width="20%"
                            sx={{
                              textAlign: "center",

                              borderBottom: "0.5px solid #000",
                              borderTop: "0.5px solid #000",

                              fontSize: "16px",

                              letterSpacing: "0",

                              lineHeight: "2",

                              fontFamily: "Trattatello",

                              padding: 0,
                            }}
                          >
                            {index + 1}
                          </TableCell>

                          <TableCell
                            width="50%"
                            sx={{
                              textAlign: "center",

                              border: "0.5px solid #000",

                              fontSize: "16px",

                              letterSpacing: "0",

                              lineHeight: "2",

                              fontFamily: "Trattatello",

                              padding: 0,
                            }}
                          >
                            {row.name}
                          </TableCell>
                          <TableCell
                            width="30%"
                            sx={{
                              textAlign: "center",

                              borderBottom: "0.5px solid #000",
                              borderTop: "0.5px solid #000",

                              fontSize: "16px",

                              letterSpacing: "0",

                              lineHeight: "2",

                              fontFamily: "Trattatello",

                              padding: 0,
                            }}
                          >
                            {row.score}
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
                <Box
                  sx={{ width: "64px", cursor: "pointer" }}
                  onClick={() => navigate("/game")}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/static/images/buttons/shopbtn.png"
                    }
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>

                <Typography variant="body1" sx={{ fontFamily: "Trattatello" }}>
                  Shop
                </Typography>
              </Stack>

              <Stack direction="column" alignItems="center">
                <Box
                  sx={{ width: "64px", cursor: "pointer" }}
                  onClick={() => navigate("/game")}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/static/images/buttons/replaybtn.png"
                    }
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>

                <Typography variant="body1" sx={{ fontFamily: "Trattatello" }}>
                  Replay
                </Typography>
              </Stack>

              <Stack direction="column" alignItems="center">
                <Box
                  sx={{ width: "64px", cursor: "pointer" }}
                  onClick={() => navigate("/game")}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/static/images/buttons/sharebtn.png"
                    }
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>

                <Typography variant="body1" sx={{ fontFamily: "Trattatello" }}>
                  Share
                </Typography>
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

              <Nav />

              <Box />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Leaderboard;
