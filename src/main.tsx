import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ConfigProvider, theme } from "antd";

import App from "./App.tsx";
import "./index.css";

const customTheme = {
  token: {
    colorPrimary: "#1DA57A",
    algorithm: theme.darkAlgorithm,
  },
};

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={customTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ConfigProvider>
);
