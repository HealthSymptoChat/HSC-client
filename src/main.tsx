import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "./components/ui/toaster.tsx";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      {/* <Toast /> */}
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
