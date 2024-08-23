import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { StyledEngineProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);
