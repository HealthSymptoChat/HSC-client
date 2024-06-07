
import { AuthContext } from "@/context/AuthContext";
import Layout from "@/layout/Layout";
import NotFound from "@/pages/404/404";
import Login from "@/pages/Auth/Login";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home";
import Package from "@/pages/Package/Package";
import { useContext } from "react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);
  console.log(authenticated);

  if (!authenticated) {
    return <NavLink to="/auth/login" replace />;
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/package" element={<Package />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
