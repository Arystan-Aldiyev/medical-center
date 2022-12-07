import React from "react";
import { useState } from "react";
import "../index.css"
import { v4 as uuidv4 } from 'uuid';
import Search from "../../components/search";
import UpdateMed from "../../components/popups/updateMed";

const Doctor = ({ userInfo, patients, backend, medicaments, appointments, setUserInfo }) => {
    const columns = ["ID number", "IIN", "Name", "Surname"]
    const [itemToSearch, setItemToSearch] = useState("")
    const [show, setShow] = useState()
    const [app, setApp] = useState(true)
    const [stats, setStats] = useState(false)
    const [curRow, setCurRow] = useState()
    const [edit, setEdit] = useState(false)
    const [state, setState] = useState()


    let filteredList = patients
    filteredList = typeof (itemToSearch) !== "undefined" ? filteredList?.filter((item) => item.id_number.toLowerCase().includes(itemToSearch) || item.iin.toLowerCase().includes(itemToSearch) || item.name.toLowerCase().includes(itemToSearch) || item.surname.toLowerCase().includes(itemToSearch)) : filteredList

    const userApps = (par) => {
        return appointments.filter(med => med.patient === par.id)
    }

    const doctorApps = (id) => {
        return appointments.filter(med => med.doctor === id)
    }

    const userMedicine = (par) => {
        return medicaments.filter(med => med.patient === par.id)
    }

    const generateStats = () => {
        const dataApps = userApps(curRow)
        const dataMed = userMedicine(curRow)

        return (
            <>
                <button className="switch" onClick={() => { setApp(!app); setEdit(false) }}>{app ? "Appointments" : "Medicaments"}</button>
                {app ? (
                    <div className="scrollable2">
                        <div className="appointments">
                            {dataApps.map((item) => (
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
                        {edit ? (<UpdateMed setEdit={setEdit} backend={backend} item={state} />) : (
                            <div className="appointments">
                                {dataMed.map((item) => (
                                    <div className="containerApps" key={uuidv4()}>
                                        <li className="switch" key={item.name}>
                                            Name: {item.name}
                                        </li>
                                        <li className="switch" key={uuidv4()}>
                                            Interval: {item.start_time} - {item.end_time}
                                        </li>
                                        {item.is_active ? (
                                            <>
                                                <li className="switch" key={uuidv4()}>
                                                    Active
                                                </li>
                                                <button className="editB" onClick={() => { setEdit(!edit); setState(item) }}>Edit</button>
                                            </>
                                        ) : (
                                            <li className="switch" key={uuidv4()}>
                                                Done
                                            </li>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                )}
                <button className="switch" onClick={() => { setEdit(false); window.print() }}>Print this page</button>
            </>
            // Назначения лекарств + возможность изменить (popup)
        )
    }

    const generateApps = () => {
        const data = doctorApps(userInfo.id)
        return (
            <div className="servicesList centered">
                <div className="scrollable2">
                    <div className="appointments">
                        {data.map((item) => (
                            <div className="containerApps" key={uuidv4()}>
                                <li className="switch" key={uuidv4()}>
                                    Name: {item.name}
                                </li>
                                <li className="switch" key={uuidv4()}>
                                    Interval: {item.time}
                                </li>
                                <li className="switch" key={uuidv4()}>
                                    Patient: {item.patient}
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
            </div>
        )
    }
    return (
        <div className="aboutPage">
            <div className="header">
                <a href='/about' className='about'>Medica inc.</a>
                <div className='right-header'>
                    <a href="#" onClick={() => { setShow(0); setStats(0); setEdit(false) }}> My appointments</a>
                    <a href="#" onClick={() => { setShow(1); setStats(0); setEdit(false) }}>Search patient</a>
                    <a href='/'>{userInfo.name} {userInfo.surname}</a>
                    <a href="/" onClick={(e) => logout(e)}>Log out</a>
                </div>
            </div>
            <div className="buttons">
                <button className="switch" onClick={() => { setShow(0); setStats(0); setEdit(false) }}>My appointments</button>
                <button className="switch" onClick={() => { setShow(1); setStats(0); setEdit(false) }}>Search patient</button>
            </div>
            {show === 0 && (
                generateApps()
            )}
            {show === 1 && (
                <div className="servicesList centered">
                    {stats ? (
                        generateStats()
                    ) : (
                        <>
                            <Search itemToSearch={itemToSearch} setItemToSearch={setItemToSearch} show={""} patients={""} doctors={""} where={"about"} />
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
                                            {/* <td key={uuidv4()}>{typeof(row.date_of_birth)} {row.date_of_birth.toDateString()}</td> */}
                                            <td className="borderless"><button className="editB" onClick={() => { setStats(true); setCurRow(row); setEdit(false) }}>View</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            )}

        </div>
    )
};

export default Doctor;