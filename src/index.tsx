import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";

// @ts-ignore
import Trattatello from "./fonts/Trattatello.ttf";
// @ts-ignore
import ClassiqueSaigon from "./fonts/Classique-Saigon.ttf";
// @ts-ignore
import EnchantedLand from "./fonts/Enchanted-Land.woff";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Trattatello';
          src: local('Trattatello'), local('Trattatello-Regular'), url(${Trattatello}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'ClassiqueSaigon';
          src: local('ClassiqueSaigon'), local('ClassiqueSaigon-Regular'), url(${ClassiqueSaigon}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'EnchantedLand';
            src: local('EnchantedLand'), local('EnchantedLand-Regular'), url(${EnchantedLand}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
