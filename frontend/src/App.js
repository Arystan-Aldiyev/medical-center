import { React, useState, useEffect } from "react";
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import Admin from "./pages/admin";
import Patient from "./pages/patient";
import Doctor from "./pages/doctor";
import About from "./pages/about-us";
import Login from "./pages/login";
import Appointment from "./pages/appointment";
import Report from "./pages/report";

const App = () => {
  const [userInfo, setUserInfo] = useState("none")
  const [patients, setPatients] = useState()
  const [doctors, setDoctors] = useState()
  const [medicaments, setMedicaments] = useState()
  const [appointments, setAppointments] = useState()
  const backend = "http://localhost:8000"
  useEffect(() => {
    (
      async () => {
        await fetch(`${backend}/api/user/`, {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        }).then((response) => {
          if (response && response.status === 200) {
            response.json().then((data) => {
              setUserInfo(data)
              console.log(data)
            })
          } else {
            console.log("Not logged in")
            setUserInfo("none")
          }
        })

        await fetch(`${backend}/api/patients/`, {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        }).then((res) => { return res.json() }).then((data) => { setPatients(data); console.log(data) })

        await fetch(`${backend}/api/doctors/`, {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        }).then((res) => { return res.json() }).then((data) => { setDoctors(data); console.log(data) })

        await fetch(`${backend}/api/medicaments/`, {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        }).then((res) => { return res.json() }).then((data) => { setMedicaments(data); console.log(data) })

        await fetch(`${backend}/api/appointments/`, {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        }).then((res) => { return res.json() }).then((data) => { setAppointments(data); console.log(data) })
      }
    )();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {userInfo.userType === "admin" && <Route path="/" element={<Admin patients={patients} doctors={doctors} backend={backend} setUserInfo={setUserInfo} />} />}
        {userInfo.userType === "admin" && <Route path="/report" element={<Report appointments={appointments} />} />}
        {userInfo.userType === "patient" && <Route path="/" element={<Patient userInfo={userInfo} backend={backend} medicaments={medicaments} appointments={appointments} setUserInfo={setUserInfo} />} />}
        {userInfo.userType === "patient" && <Route path="/makeAppointment" element={<Appointment backend={backend} userInfo={userInfo} doctors={doctors} />} />}
        {userInfo.userType === "doctor" && <Route path="/" element={<Doctor userInfo={userInfo} patients={patients} backend={backend} medicaments={medicaments} appointments={appointments} setUserInfo={setUserInfo} />} />}
        {userInfo === "none" && <Route path="/" element={<About userInfo={userInfo} backend={backend} setUserInfo={setUserInfo} />} />}
        {userInfo === "none" && <Route path="/login" element={<Login backend={backend} setUserInfo={setUserInfo} />} />}
        <Route path="/about" element={<About userInfo={userInfo} backend={backend} setUserInfo={setUserInfo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;