import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "./components/ui/toaster.tsx";
import "./index.css";
import Login from "./pages/Auth/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login/>
    {/* <Toast /> */}
    <Toaster />
  </React.StrictMode>
);
