import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<AdminLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
