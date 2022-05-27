import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  GamePage,
  LeaderboardPage,
  InstructionPage,
} from "./pages";

import MainLayout from "./layouts/MainLayout";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/game",
          element: <GamePage />,
        },
        {
          path: "/leaderboard",
          element: <LeaderboardPage />,
        },
        {
          path: "/instruction",
          element: <InstructionPage />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
