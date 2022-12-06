import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from "./pages/admin";
import Patient from "./pages/patient";
import Doctor from "./pages/doctor";
import About from "./pages/about-us";
import Login from "./pages/login";

const App = () => {
  const [userInfo, setUserInfo] = useState("none")
  const [patients, setPatients] = useState()
  const [doctors, setDoctors] = useState()
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
      }
      //Testing purposes
      // setUserInfo({
      //   userType: 'admin',
      //   name: "Arys",
      //   surname: "Aldiyev"
      // })
      // setPatients([
      //   {
      //     date_of_birth: new Date("2018-7-22"),
      //     iin: "1",
      //     id_number: "1",
      //     name: "1",
      //     surname: "1",
      //     middlename: "1",
      //     blood_group: "1",
      //     emergency_contact_number: "1",
      //     contact_number: "1",
      //     address: "1",
      //     marital_status: "1"
      //   }, {
      //     date_of_birth: new Date("1901-6-2"),
      //     iin: "2",
      //     id_number: "2",
      //     name: "2",
      //     surname: "2",
      //     middlename: "2",
      //     blood_group: "2",
      //     emergency_contact_number: "2",
      //     contact_number: "2",
      //     address: "2",
      //     marital_status: "2"
      //   }, {
      //     date_of_birth: new Date("1661-1-2"),
      //     iin: "3",
      //     id_number: "3",
      //     name: "3",
      //     surname: "3",
      //     middlename: "3",
      //     blood_group: "3",
      //     emergency_contact_number: "3",
      //     contact_number: "3",
      //     address: "3",
      //     marital_status: "3"
      //   }, {
      //     date_of_birth: new Date("1961-1-2"),
      //     iin: "4",
      //     id_number: "4",
      //     name: "4",
      //     surname: "4",
      //     middlename: "4",
      //     blood_group: "4",
      //     emergency_contact_number: "4",
      //     contact_number: "4",
      //     address: "4",
      //     marital_status: "4"
      //   }])
      // setDoctors([
      //   {
      //     date_of_birth: new Date("2018-7-22"),
      //     iin: "2",
      //     id_number: "1",
      //     name: "1",
      //     surname: "1",
      //     middlename: "1",
      //     contact_number: "1",
      //     department_id: "not yet",
      //     specialization_id: "not yet",
      //     experience: "not yet",
      //     category: "not yet",
      //     price: "not yet",
      //     schedule_details: "not yet",
      //     degree: "not yet",
      //     rating: "not yet",
      //     address: "1",
      //     homepage_url: "not yet"
      //   }, {
      //     date_of_birth: new Date("1901-6-12"),
      //     iin: "2",
      //     id_number: "2",
      //     name: "2",
      //     surname: "2",
      //     middlename: "2",
      //     contact_number: "2",
      //     department_id: "not yet",
      //     specialization_id: "not yet",
      //     experience: "not yet",
      //     category: "not yet",
      //     price: "not yet",
      //     schedule_details: "not yet",
      //     degree: "not yet",
      //     rating: "not yet",
      //     address: "2",
      //     homepage_url: "not yet"
      //   }, {
      //     date_of_birth: new Date("1661-1-2"),
      //     iin: "3",
      //     id_number: "3",
      //     name: "3",
      //     surname: "3",
      //     middlename: "3",
      //     contact_number: "3",
      //     department_id: "not yet",
      //     specialization_id: "not yet",
      //     experience: "not yet",
      //     category: "not yet",
      //     price: "not yet",
      //     schedule_details: "not yet",
      //     degree: "not yet",
      //     rating: "not yet",
      //     address: "3",
      //     homepage_url: "not yet"
      //   }, {
      //     date_of_birth: new Date("1961-1-2"),
      //     iin: "4",
      //     id_number: "4",
      //     name: "4",
      //     surname: "4",
      //     middlename: "4",
      //     contact_number: "4",
      //     department_id: "not yet",
      //     specialization_id: "not yet",
      //     experience: "not yet",
      //     category: "not yet",
      //     price: "not yet",
      //     schedule_details: "not yet",
      //     degree: "not yet",
      //     rating: "not yet",
      //     address: "4",
      //     homepage_url: "not yet"
      //   }
      // ])
    )();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {userInfo.userType === "admin" && <Route path="/" element={<Admin patients={patients} doctors={doctors} backend={backend} />} />}
        {userInfo.userType === "patient" && <Route path="/" element={<Patient />} />}
        {userInfo.userType === "doctor" && <Route path="/" element={<Doctor />} />}
        {userInfo === "none" && <Route path="/" element={<About userInfo={userInfo} />} />}
        <Route path="/about" element={<About userInfo={userInfo} />} />
        <Route path="/login" element={<Login backend={backend} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;