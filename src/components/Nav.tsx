import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { useNavigate, useLocation, matchPath } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Stack direction="row" alignItems="center" spacing={4} sx={{}}>
      <Typography
        onClick={() => navigate("/instruction")}
        style={{
          color: location.pathname === "/instruction" ? "yellow" : "white",
          textDecoration: "none",

          fontSize: "20px",

          cursor: "pointer",

          fontFamily: "EnchantedLand",
        }}
      >
        Instruction
      </Typography>
      <Typography
        onClick={() => navigate("/leaderboard")}
        style={{
          color: location.pathname === "/leaderboard" ? "yellow" : "white",
          textDecoration: "none",

          fontSize: "20px",

          cursor: "pointer",

          fontFamily: "EnchantedLand",
        }}
      >
        Score
      </Typography>
      <Typography
        onClick={() => navigate("/about")}
        style={{
          color: location.pathname === "/about" ? "yellow" : "white",
          textDecoration: "none",

          fontSize: "20px",

          cursor: "pointer",

          fontFamily: "EnchantedLand",
        }}
      >
        About
      </Typography>
    </Stack>
  );
};

export default Nav;
