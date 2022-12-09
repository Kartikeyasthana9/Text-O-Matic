import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import AdminProfile from "./components/admin/Profile";
import UserProfile from "./components/user/Profile";
import Header from "./components/main/Header";
import Main from "./components/main";
import Home from "./components/main/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/main/home" />} />
          <Route element={<Main />} path="main">
          <Route element={<Home/>} path="home" />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* <Route element={<Admin />} path="admin" /> */}
          <Route path="profile" element={<AdminProfile />} />

          {/* <Route element={<User />} path="user" /> */}
          <Route path="profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
