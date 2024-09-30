import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WorkoutContextProvider } from "./context/workoutContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
