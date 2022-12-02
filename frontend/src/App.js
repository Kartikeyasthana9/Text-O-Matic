import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import Header from './components/main/Header';
import Main from './components/main';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        
          <Route element={<Main />} path="main">
       
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
