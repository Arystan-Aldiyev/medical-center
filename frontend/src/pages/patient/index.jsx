import React, { useState, useEffect } from "react";
import "../index.css"
import { v4 as uuidv4 } from 'uuid';

const Patient = ({ userInfo, backend }) => {
    const [apps, setApps] = useState([])
    const [meds, setMeds] = useState([])
    const [show, setShow] = useState(true)
    const [edit, setEdit] = useState(false)
    const [state, setState] = useState(userInfo)

    useEffect(() => {
        (
            async () => {
                await fetch(`${backend}/api/appointments/${userInfo.id}`, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                }).then((response) => { return response.json() }).then((data) => setApps(data))

                await fetch(`${backend}/api/medicaments/${userInfo.id}`, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                }).then((response) => { return response.json() }).then((data) => setMeds(data))
            })();
    }, [])

    console.log(state)
    return (
        <div className="aboutPage">
            <div className="servicesList centered">
                <div className="reverse">
                    <button className="switch" onClick={() => { setShow(!show) }}>{show ? "Appointments" : "Medicaments"}</button>
                    <button className="switch" onClick={() => { setEdit(!edit) }}>Edit my info</button>
                    <button className="switch"><a href="/makeAppointment">Make appointment</a></button>                    
                </div>
                {edit && (
                    <div className="popup P">
                        <div onClick={() => setEdit(false)}>Close &times;</div>
                        <div className="scrollable">
                            <form action={`${backend}/api/updatePatient/${userInfo.id}/`} method="PUT">
                                <input type="date" name="date_of_birth" className="inputText inputUpper" required value={state.date_of_birth} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="iin" className="inputText" placeholder="IIN" required value={state.iin} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="id_number" className="inputText" placeholder="ID number" required value={state.id_number} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="name" className="inputText" placeholder="Name" required value={state.name} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="surname" className="inputText" placeholder="Surname" required value={state.surname} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="middlename" className="inputText" placeholder="Middlename" required value={state.middlename} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="blood_group" className="inputText" placeholder="Blood group" required value={state.blood_group} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="emergency_contact_number" className="inputText" placeholder="Emergency concact number" required value={state.emergency_contact_number} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="contact_number" className="inputText" placeholder="Contact number" required value={state.contact_number} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="address" className="inputText" placeholder="Address" required value={state.address} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="marital_status" className="inputText" placeholder="Marital status" required value={state.marital_status} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <input type="text" name="password" className="inputText inputLower" placeholder="Password" required value={state.password} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                                <button type="submit">Update!</button>
                            </form>
                        </div>
                    </div>
                )}
                        {show ? (
                            <div className="scrollable2">
                                <div className="appointments">
                                    {apps.map((item) => (
                                        <div className="containerApps" key={uuidv4()}>
                                            <li className="switch" key={uuidv4()}>
                                                Name: {item.name}
                                            </li>
                                            <li className="switch" key={uuidv4()}>
                                                Interval: {item.time}
                                            </li>
                                            <li className="switch" key={uuidv4()}>
                                                Doctor: {item.doctor}
                                            </li>
                                            <li className="switch" key={uuidv4()}>
                                                Price: ${item.price}
                                            </li>
                                            <li className="switch" key={uuidv4()}>
                                                Department: {item.department}
                                            </li>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="scrollable2">
                                <div className="appointments">
                                    {meds.map((item) => (
                                        <div className="containerApps" key={uuidv4()}>
                                            <li className="switch" key={item.name}>
                                                Name: {item.name}
                                            </li>
                                            <li className="switch" key={uuidv4()}>
                                                Interval: {item.start_time} - {item.end_time}
                                            </li>
                                            {item.active ? (
                                                <>
                                                    <li className="switch" key={uuidv4()}>
                                                        Active
                                                    </li>
                                                    <button className="editB">Edit</button>
                                                </>
                                            ) : (
                                                <li className="switch" key={uuidv4()}>
                                                    Done
                                                </li>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
        </div>

            )
};

            export default Patient;