import { Route , Routes} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
 
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/dashboard"  element={<Dashboard/>}/>
      </Routes>

    </div>
  );
}

export default App;
