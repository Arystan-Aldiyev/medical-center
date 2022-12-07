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

        //Testing purposes
        // setUserInfo({
        //   userType: 'patient',
        //   name: "Some",
        //   surname: "Person",
        //   id: 3
        // })
        // setPatients([
        //   {
        //     date_of_birth: "2018-7-22",
        //     iin: "1",
        //     id: 1,
        //     id_number: "1",
        //     name: "1",
        //     surname: "1",
        //     middlename: "1",
        //     blood_group: "1",
        //     emergency_contact_number: "1",
        //     contact_number: "1",
        //     address: "1",
        //     marital_status: "1",
        //   }, {
        //     date_of_birth: "1901-6-2",
        //     iin: "2",
        //     id: 2,
        //     id_number: "2",
        //     name: "2",
        //     surname: "2",
        //     middlename: "2",
        //     blood_group: "2",
        //     emergency_contact_number: "2",
        //     contact_number: "2",
        //     address: "2",
        //     marital_status: "2",
        //   }, {
        //     date_of_birth: "1661-1-2",
        //     iin: "3",
        //     id: 3,
        //     id_number: "3",
        //     name: "3",
        //     surname: "3",
        //     middlename: "3",
        //     blood_group: "3",
        //     emergency_contact_number: "3",
        //     contact_number: "3",
        //     address: "3",
        //     marital_status: "3",
        //   }, {
        //     date_of_birth: "1961-1-2",
        //     iin: "4",
        //     id: 4,
        //     id_number: "4",
        //     name: "4",
        //     surname: "4",
        //     middlename: "4",
        //     blood_group: "4",
        //     emergency_contact_number: "4",
        //     contact_number: "4",
        //     address: "4",
        //     marital_status: "4",
        //   }])
        // setDoctors([
        //   {
        //     date_of_birth: "2018-7-22",
        //     iin: "2",
        //     id_number: "1",
        //     name: "1",
        //     surname: "1",
        //     middlename: "1",
        //     contact_number: "1",
        //     department_id: "not yet",
        //     specialization_id: "gp\n hz\n mal",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "1",
        //     homepage_url: "not yet",
        //     id: 5
        //   }, {
        //     date_of_birth: "1901-6-12",
        //     iin: "2",
        //     id_number: "2",
        //     name: "2",
        //     surname: "2",
        //     middlename: "2",
        //     contact_number: "2",
        //     department_id: "radiology",
        //     specialization_id: "not yet",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "2",
        //     homepage_url: "not yet",
        //     id: 6
        //   }, {
        //     date_of_birth: "1661-1-2",
        //     iin: "3",
        //     id_number: "3",
        //     name: "3",
        //     surname: "3",
        //     middlename: "3",
        //     contact_number: "3",
        //     department_id: "ENT",
        //     specialization_id: "not yet",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "3",
        //     homepage_url: "not yet",
        //     id: 7
        //   }, {
        //     date_of_birth: "1961-1-2",
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
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "4",
        //     homepage_url: "not yet",
        //     id: 8
        //   }, {
        //     date_of_birth: "2018-7-22",
        //     iin: "2",
        //     id_number: "1",
        //     name: "1",
        //     surname: "1",
        //     middlename: "1",
        //     contact_number: "1",
        //     department_id: "not yet",
        //     specialization_id: "gp\n hz\n mal",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "1",
        //     homepage_url: "not yet",
        //     id: 5
        //   }, {
        //     date_of_birth: "1901-6-12",
        //     iin: "2",
        //     id_number: "2",
        //     name: "2",
        //     surname: "2",
        //     middlename: "2",
        //     contact_number: "2",
        //     department_id: "radiology",
        //     specialization_id: "not yet",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "2",
        //     homepage_url: "not yet",
        //     id: 6
        //   }, {
        //     date_of_birth: "1661-1-2",
        //     iin: "3",
        //     id_number: "3",
        //     name: "3",
        //     surname: "3",
        //     middlename: "3",
        //     contact_number: "3",
        //     department_id: "ENT",
        //     specialization_id: "not yet",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "3",
        //     homepage_url: "not yet",
        //     id: 7
        //   }, {
        //     date_of_birth: "1961-1-2",
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
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "4",
        //     homepage_url: "not yet",
        //     id: 8
        //   }, {
        //     date_of_birth: "2018-7-22",
        //     iin: "2",
        //     id_number: "1",
        //     name: "1",
        //     surname: "1",
        //     middlename: "1",
        //     contact_number: "1",
        //     department_id: "not yet",
        //     specialization_id: "gp\n hz\n mal",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "1",
        //     homepage_url: "not yet",
        //     id: 5
        //   }, {
        //     date_of_birth: "1901-6-12",
        //     iin: "2",
        //     id_number: "2",
        //     name: "2",
        //     surname: "2",
        //     middlename: "2",
        //     contact_number: "2",
        //     department_id: "radiology",
        //     specialization_id: "not yet",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "2",
        //     homepage_url: "not yet",
        //     id: 6
        //   }, {
        //     date_of_birth: "1661-1-2",
        //     iin: "3",
        //     id_number: "3",
        //     name: "3",
        //     surname: "3",
        //     middlename: "3",
        //     contact_number: "3",
        //     department_id: "ENT",
        //     specialization_id: "not yet",
        //     experience: "not yet",
        //     category: "not yet",
        //     price: "not yet",
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "3",
        //     homepage_url: "not yet",
        //     id: 7
        //   }, {
        //     date_of_birth: "1961-1-2",
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
        //     schedule_details: "9;10;13;16",
        //     degree: "not yet",
        //     rating: "not yet",
        //     address: "4",
        //     homepage_url: "not yet",
        //     id: 8
        //   }
        // ])
        // setMedicaments([
        //   {
        //     start_time: "2021-08-16",
        //     end_time: "2026-06-01",
        //     name: "NUNUNUNUNU",
        //     is_active: true,
        //     patient: 1,
        //   }, {
        //     start_time: "2020-07-10",
        //     end_time: "2021-05-14",
        //     name: "uspokoitelniye",
        //     is_active: false,
        //     patient: 2,
        //   }, {
        //     start_time: "2022-12-06",
        //     end_time: "2023-12-12",
        //     name: "water",
        //     is_active: true,
        //     patient: 2,
        //   }, {
        //     start_time: "2022-12-06",
        //     end_time: "2023-12-12",
        //     name: "water",
        //     is_active: true,
        //     patient: 3,
        //   }, {
        //     start_time: "2022-12-06",
        //     end_time: "2023-12-12",
        //     name: "water",
        //     is_active: true,
        //     patient: 4,
        //   }, {
        //     start_time: "2022-12-06",
        //     end_time: "2023-12-12",
        //     name: "water",
        //     is_active: true,
        //     patient: 4,
        //   }
        // ])
        // setAppointments([
        //   {
        //     name: "usluga 1",
        //     time: "10:00-11:00",
        //     doctor: 1,
        //     patient: 2,
        //     price: 104.2,
        //     department: "some department"
        //   }, {
        //     name: "usluga 2",
        //     time: "11:00-13:00",
        //     doctor: 3,
        //     patient: 2,
        //     price: 10.2,
        //     department: "another department"
        //   }, {
        //     name: "usluga 2",
        //     time: "11:00-13:00",
        //     doctor: 3,
        //     patient: 2,
        //     price: 10.2,
        //     department: "another department"
        //   }, {
        //     name: "usluga 2",
        //     time: "11:00-13:00",
        //     doctor: 3,
        //     patient: 2,
        //     price: 10.2,
        //     department: "another department"
        //   }, {
        //     name: "usluga 2",
        //     time: "11:00-13:00",
        //     doctor: 3,
        //     patient: 2,
        //     price: 10.2,
        //     department: "another department"
        //   }, {
        //     name: "usluga 2",
        //     time: "11:00-13:00",
        //     doctor: 3,
        //     patient: 2,
        //     price: 10.2,
        //     department: "another department"
        //   }, {
        //     name: "usluga 2",
        //     time: "11:00-13:00",
        //     doctor: 3,
        //     patient: 3,
        //     price: 10.2,
        //     department: "another department"
        //   }, {
        //     name: "usluga 2",
        //     time: "11:00-13:00",
        //     doctor: 3,
        //     patient: 3,
        //     price: 10.2,
        //     department: "another department"
        //   }, {
        //     name: "usluga 2",
        //     time: "11:00-13:00",
        //     doctor: 3,
        //     patient: 3,
        //     price: 10.2,
        //     department: "another department"
        //   }
        // ])
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