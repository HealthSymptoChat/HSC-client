import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "./components/ui/toaster.tsx";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Toast /> */}
    <Toaster />
  </React.StrictMode>
);
