import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/header";
import Admin from "./pages/admin";
import Patient from "./pages/patient";
import Doctor from "./pages/doctor";
import About from "./pages/about-us";
import Login from "./pages/login";

const App = () => {
  const [userInfo, setUserInfo] = useState("none")
  const backend = "localhost:8000"
  useEffect(() => {
    (
      async () => {
        const response = await fetch(`${backend}/api/user/`, {
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.status == 404) {
          setUserInfo('none')
        } else {
          const data = await response.json()
          console.log(data)
          setUserInfo(data)
        }
      }
    )();
  }, [])

  console.log(userInfo)

  return (
    <BrowserRouter>
      <Routes>
        {userInfo === "admin" && <Route path="/" element={<Admin />} />}
        {userInfo === "patient" && <Route path="/" element={<Patient />} />}
        {userInfo === "doctor" && <Route path="/" element={<Doctor />} />}
        {userInfo === "none" && <Route path="/" element={<About />} />}
        <Route path="/about" element={<About userInfo={userInfo}/>} />
        <Route path="/login" element={<Login backend={backend} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;