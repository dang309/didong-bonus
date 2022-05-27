import React from "react";

import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box>
      <img
        src={process.env.PUBLIC_URL + "/static/images/loading.png"}
        alt="loading"
      />
    </Box>
  );
};

export default Loading;
