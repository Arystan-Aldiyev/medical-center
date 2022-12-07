import React, { useState, useEffect } from "react";
import "../index.css"
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from '@mui/material';

const Appointment = ({ backend, userInfo, doctors }) => {
    const navigate = useNavigate()
    const [itemToSearch, setItemToSearch] = useState("")
    const [filteredList, updateFilter] = useState(doctors)
    const [dep, setDep] = useState("all")
    const [confirm, askConfirm] = useState(false)
    const [details, setDetails] = useState()
    const [overall, setOverall] = useState(0)

    const [page, setPage] = useState(1)
    const handleChange = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        (
            async () => {
                const temp = itemToSearch !== "" ? doctors?.filter((item) => item.name.toLowerCase().includes(itemToSearch) || item.iin.toLowerCase().includes(itemToSearch) || item.specialization_id.toLowerCase().includes(itemToSearch)) : doctors
                const second = dep !== "all" ? temp?.filter((item) => item.department_id === dep) : temp
                updateFilter(second)
            }
        )();
    }, [itemToSearch, dep])

    useEffect(() => {
        (
            async () => {
                setOverall(parseInt(filteredList.length / 5) + 1)
            }
        )();
    }, [filteredList])

    const paginate = (page_size, page_number) => {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        if (filteredList) {
            return filteredList.slice((page_number - 1) * page_size, page_number * page_size);
        } else {
            return []
        }
    }

    const confirmGo = async (doctor, time, date) => {
        await fetch(`${backend}/api/createAppointment/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                name: "Doctor visit",
                date: date,
                time: `${time}:00 - ${parseInt(time) + 1}:00`,
                doctor: doctor.id,
                patient: userInfo.id,
                price: doctor.price,
            })
        })
        window.location.reload()
        navigate("/")
    }

    return (
        <>
            {doctors ? (
                <div className="aboutPage">
                    {confirm ? (
                        <div className="servicesList centered">
                            <div className="containerApps" key={uuidv4()}>
                                <li className="switch" key={uuidv4()}>
                                    {details.doctor.name} {details.doctor.surname}
                                </li>
                                <li className="switch" key={uuidv4()}>
                                    Date: {details.date}
                                </li>
                                <li className="switch" key={uuidv4()}>
                                    Time: {details.time}
                                </li>
                                <button className="switch" onClick={() => { confirmGo(details.doctor, details.time, detailt.date) }}>Confirm</button>
                            </div>
                        </div>
                    ) : (
                        <div className="center">
                            <div className="servicesList centered">
                                <div className="reverse">
                                    <div className='searchDiv'>
                                        <SearchIcon className='searchIcon' />
                                        <input className='searchBox' type='text' placeholder='Search...' value={itemToSearch} onChange={(e) => { setItemToSearch(e.target.value) }} />
                                    </div>
                                    <select className="switch" onChange={(e) => setDep(e.target.value)}>
                                        <option value="all">All departments</option>
                                        <option value="medicine">Medicine</option>
                                        <option value="surgery">Surgery</option>
                                        <option value="gynecology">Gynecology</option>
                                        <option value="obsterics">Obsterics</option>
                                        <option value="pediatrics">Pediatrics</option>
                                        <option value="radiology">Radiology</option>
                                        <option value="eye">Eye</option>
                                        <option value="ENT">Ent</option>
                                        <option value="dental">Dental</option>
                                        <option value="orthopedics">Orthopedics</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="psychiatry">Psychiatry</option>
                                        <option value="skin">Skin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="scrollable2">
                                <div className="appointments">
                                    {paginate(5, page).map((item) => (
                                        <div className="containerApps" key={uuidv4()}>
                                            <li className="switch" key={uuidv4()}>
                                                {item.name} {item.surname}
                                            </li>
                                            <li className="switch" key={uuidv4()}>
                                                Department: {item.department_id}
                                            </li>
                                            <li className="switch" key={uuidv4()}>
                                                Specialization: {item.specialization_id}
                                            </li>
                                            <li className="switch" key={uuidv4()}>
                                                <input type="date" id="dateApp"/>
                                            </li>
                                            <li className="a" key={uuidv4()}>
                                                {item.schedule_details.split(";").map((time) => (
                                                    <button className="switch" onClick={() => { askConfirm(true); setDetails({ doctor: item, time: time, date: document.getElementById("dateApp").value }) }} key={uuidv4()}>
                                                        <li>{time}:00 - {parseInt(time) + 1}:00</li>
                                                    </button>
                                                ))}
                                            </li>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Pagination count={overall} className="pagination" page={page} onChange={handleChange} />
                        </div>
                    )}
                </div>
            ) : (
                <div className="aboutPage">No doctors available</div>
            )}
        </>

    )
};

export default Appointment;