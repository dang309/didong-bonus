import React from "react";

import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/static/images/background.png"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",

        width: "100%",
        height: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default React.memo(MainLayout);
