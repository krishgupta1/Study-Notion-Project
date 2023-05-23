import {Route , Routes} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 ">
      <Navbar className="" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
