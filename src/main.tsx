import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GenBtn } from "./Components/GenBtn.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <GenBtn />
  </StrictMode>
);
