import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StoryDataProvider } from "./StoryDataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoryDataProvider>
      <App />
    </StoryDataProvider>
  </StrictMode>
);
