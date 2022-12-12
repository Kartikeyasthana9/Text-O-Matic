import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import AdminProfile from "./components/admin/Profile";
import UserProfile from "./components/user/Profile";
import Header from "./components/main/Header";
import Main from "./components/main";
import User from "./components/user"

import Home from "./components/main/Home";
import ManageUser from "./components/admin/ManageUser";
import FileManager from "./components/user/FileManager";
import AudioBook from "./components/user/AudioBook";
import Summarizer from "./components/user/Summarizer"
import Admin from "./components/admin"
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster position="top-left" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route element={<Main />} path="main">
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
     
      
            
          </Route>

          <Route element={<Admin />} path="admin">
            <Route path="profile" element={<AdminProfile />} />
            <Route path="manageuser" element={<ManageUser />} />
          </Route>

          <Route element={<User />} path="user" >
          <Route path="profile" element={<UserProfile />} />
          <Route path="filemanager" element={<FileManager/>}/>
          <Route path="summarizer" element={<Summarizer/>}/>
          <Route path="audiobook" element={<AudioBook/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
