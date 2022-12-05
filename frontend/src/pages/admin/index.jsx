import React from "react";
import { useState } from "react";
import "../index.css"
import Search from "../../components/search";
import { v4 as uuidv4 } from 'uuid';

const Admin = ({ patients, doctors, backend }) => {
    const [show, setShow] = useState(true)
    const patientCols = ["User ID", "IIN", "Name", "Surname", "Middlename", "Date of birth", "Address", "Contact number", "Blood group", "Emergency contact number", "marital status"]
    const doctorCols = ["User ID", "IIN", "Name", "Surname", "Middlename", "Date of birth", "Address", "Contact number", "Department", "Specialization", "Expirience", "Category", "Price", "Schedule details", "Rating", "Degree", "Url"]
    const [data, setData] = useState(patients)
    const [columns, setColumns] = useState(patientCols)
    const [itemToSearch, setItemToSearch] = useState("")
    const [filteredList, updateFilter] = useState(patients)
    const [add, setAdd] = useState(true)

    const changeMode = (mode) => {
        setShow(mode)
        mode ? setData(patients) : setData(doctors)
        mode ? setColumns(patientCols) : setColumns(doctorCols)
        mode ? updateFilter(patients) : updateFilter(doctors)
    }

    return (
        <div className="aboutPage">
            <div className="servicesAbout" id="services">
                <div className="reverse">
                    <Search itemToSearch={itemToSearch} setItemToSearch={setItemToSearch} filteredList={filteredList} updateFilter={updateFilter} show={show} patients={patients} doctors={doctors} />
                    <button onClick={() => {
                        setAdd(!add)
                        setItemToSearch("")
                    }} className="switch">Add new {show ? "patient" : "doctor"}</button>
                    {add &&
                        <div className="popup">
                            {show ? (
                                <form action={`${backend}/api/createPatient`}>
                                    <input type="date" name="date_of_birth" className="inputText inputUpper" />
                                    <input type="text" name="iin" className="inputText" />
                                    <input type="text" name="id_number" className="inputText" />
                                    <input type="text" name="name" className="inputText" />
                                    <input type="text" name="surname" className="inputText" />
                                    <input type="text" name="middlename" className="inputText" />
                                    <input type="text" name="blood_group" className="inputText" />
                                    <input type="text" name="emergency_contact_number" className="inputText" />
                                    <input type="text" name="contact_number" className="inputText" />
                                    <input type="text" name="address" className="inputText" />
                                    <input type="text" name="marital_status" className="inputText" />
                                    <input type="text" name="password" className="inputText inputLower" />
                                    <button type="submit">Create!</button>
                                </form>
                            ) : (
                                <form action={`${backend}/api/createDoctor`}>
                                    <input type="date" name="date_of_birth" className="inputText inputUpper" />
                                    <input type="text" name="iin" className="inputText" />
                                    <input type="text" name="id_number" className="inputText" />
                                    <input type="text" name="name" className="inputText" />
                                    <input type="text" name="surname" className="inputText" />
                                    <input type="text" name="middlename" className="inputText" />
                                    <input type="text" name="address" className="inputText" />
                                    <input type="text" name="contact_number" className="inputText" />
                                    <input type="text" name="password" className="inputText inputLower" />
                                    <input type="text" name="department_id" className="inputText" />
                                    <input type="text" name="specialization_id" className="inputText" />
                                    <input type="text" name="experience" className="inputText" />
                                    <input type="text" name="category" className="inputText" />
                                    <input type="text" name="price" className="inputText" />
                                    <input type="text" name="schedule_details" className="inputText" />
                                    <input type="text" name="rating" className="inputText" />
                                    <input type="text" name="degree" className="inputText" />
                                    <input type="text" name="homepage_url" className="inputText" />
                                    <button type="submit">Create!</button>
                                </form>
                            )}
                        </div>}
                    <button onClick={() => {
                        changeMode(!show)
                        setAdd(false)
                        setItemToSearch("")
                    }} className="switch">{show ? "Show doctors" : "Show patients"}</button>
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
                                    <td key={uuidv4()} className={"datatd"}>{row.date_of_birth.toDateString()}</td>
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
                                    {/* <td key={uuidv4()}>{row.procedure}</td>
                                    <td key={uuidv4()}>{row.department}</td>
                                    <td key={uuidv4()}>{row.price}</td>
                                    <td key={uuidv4()}>{row.contraindications}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
};

export default Admin;