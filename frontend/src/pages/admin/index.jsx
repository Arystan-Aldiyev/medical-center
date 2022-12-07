import React from "react";
import { useState } from "react";
import "../index.css"
import Search from "../../components/search";
import { v4 as uuidv4 } from 'uuid';
import Create from "../../components/popups/create";
import Update from "../../components/popups/update";
import { useNavigate } from "react-router-dom";

const Admin = ({ patients, doctors, backend, setUserInfo }) => {
    const navigate = useNavigate()
    const [show, setShow] = useState(true)
    const patientCols = ["User ID", "IIN", "Name", "Surname", "Middlename", "Date of birth", "Address", "Contact number", "Blood group", "Emergency contact number", "marital status"]
    const doctorCols = ["User ID", "IIN", "Name", "Surname", "Middlename", "Date of birth", "Address", "Contact number", "Department", "Specialization", "Expirience", "Category", "Price", "Schedule details", "Rating", "Degree", "Url"]
    const [columns, setColumns] = useState(patientCols)
    const [itemToSearch, setItemToSearch] = useState("")
    const [filteredList, updateFilter] = useState(patients)
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const [curRow, setCurRow] = useState()

    const logout = async (e) => {
        e.preventDefault();
        await fetch(`${backend}/api/logout/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        setUserInfo("none")
        navigate("/")
        window.location.reload()
    }

    const changeMode = (mode) => {
        setShow(mode)
        mode ? setColumns(patientCols) : setColumns(doctorCols)
        mode ? updateFilter(patients) : updateFilter(doctors)
    }

    const deleteFunct = async (row, show) => {
        if (show) {
            await fetch(`${backend}/api/updateDoctor/${row.id}}`, {
                method: "DELETE",
                credentials: 'include'
            })
        } else {
            await fetch(`${backend}/api/updatePatient/${row.id}}`, {
                method: "DELETE",
                credentials: 'include'
            })
        }
    }

    return (
        <div className="aboutPage">
            <div className="servicesAbout">
                <div className="reverse">
                    <Search itemToSearch={itemToSearch} setItemToSearch={setItemToSearch} filteredList={filteredList} updateFilter={updateFilter} show={show} patients={patients} doctors={doctors} where={"admin"} />
                    <button onClick={() => {
                        setEdit(false)
                        setAdd(!add)
                        setItemToSearch("")
                    }} className="switch">Add new {show ? "patient" : "doctor"}</button>
                    {add && <Create backend={backend} show={show} setAdd={setAdd} />}
                    {edit && <Update backend={backend} show={show} row={curRow} setEdit={setEdit} />}
                    <button onClick={() => {
                        setItemToSearch("")
                        changeMode(!show)
                        setAdd(false)
                        setEdit(false)
                    }} className="switch">{show ? "Show doctors" : "Show patients"}</button>
                    <button className="switch" onClick={(e) => { logout(e) }}></button>
                </div>
                <div className="usersList">
                    <table>
                        <thead>
                            <tr>
                                {filteredList && columns.map((col) => (
                                    <th key={col}>{col}</th>
                                ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {filteredList && filteredList.map((row) => (
                                <tr key={uuidv4()}>
                                    <td key={uuidv4()}>{row.id_number}</td>
                                    <td key={uuidv4()}>{row.iin}</td>
                                    <td key={uuidv4()}>{row.name}</td>
                                    <td key={uuidv4()}>{row.surname}</td>
                                    <td key={uuidv4()}>{row.middlename}</td>
                                    <td key={uuidv4()} className={"datatd"}>{(row.date_of_birth)}</td>
                                    <td key={uuidv4()}>{row.address}</td>
                                    <td key={uuidv4()}>{row.contact_number}</td>
                                    {show ? (
                                        <>
                                            <td key={uuidv4()}>{row.blood_group}</td>
                                            <td key={uuidv4()}>{row.emergency_contact_number}</td>
                                            <td key={uuidv4()}>{row.marital_status}</td>
                                        </>
                                    ) : (
                                        <>
                                            <td key={uuidv4()}>{row.department_id}</td>
                                            <td key={uuidv4()}>{row.specialization_id}</td>
                                            <td key={uuidv4()}>{row.experience}</td>
                                            <td key={uuidv4()}>{row.category}</td>
                                            <td key={uuidv4()}>{row.price}</td>
                                            <td key={uuidv4()}>{row.schedule_details}</td>
                                            <td key={uuidv4()}>{row.rating}</td>
                                            <td key={uuidv4()}>{row.degree}</td>
                                            <td key={uuidv4()}>{row.homepage_url}</td>
                                        </>
                                    )}
                                    <td className="borderless"><button className="editB" onClick={async () => {
                                        setAdd(false)
                                        await setEdit(false)
                                        await setCurRow(row)
                                        setEdit(true)
                                        setItemToSearch("")
                                    }}>Edit</button></td>
                                    <td className="borderless"><button className="editB" onClick={() => { deleteFunct(row, show) }}>Delete</button></td>
                                    {/* <td key={uuidv4()}>{row.procedure}</td>
                                    <td key={uuidv4()}>{row.department}</td>
                                    <td key={uuidv4()}>{row.price}</td>
                                <td key={uuidv4()}>{row.contraindications}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="switch" onClick={() => { navigate("/report") }}>Show report</button>

            </div>
        </div >
    )
};

export default Admin;