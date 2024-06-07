import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./pages/404/404";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";
import Package from "./pages/Package/Package";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/package"
          element={
            <Layout>
              <Package />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
