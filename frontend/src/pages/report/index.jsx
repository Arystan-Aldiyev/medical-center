import React, { useState } from "react";
import "../index.css"

const Report = ({ appointments }) => {
    const [show, setShow] = useState()
    const blabal = "sdasd"

    const profit = (apps) => {
        let result = 0
        apps.forEach(item => result += item.price)
        return parseFloat(result).toFixed(2)
    }

    const byDepartments = (apps) => {
        let result = {
        }
        apps.forEach(item => {
            if (result[item.department]) {
                result[item.department] += 1
            } else {
                result[item.department] = 1
            }
        })
        return (
            <div className="overall">
                {Object.keys(result).map((item) => (
                    <li>{item}: {result[item]}</li>
                ))}
            </div>
        )
    }

    const calculate = (start, end) => {
        if (start === "all") {
            return (
                <div className="overall" >
                    <li>Total patients: {appointments.length}</li>
                    <li>Total profit: ${profit(appointments)}</li>
                    <h2>By departments:</h2>
                    {byDepartments(appointments)}
                </div >
            )
        } else {
            const apps = appointments.filter(ap => start <= ap.date && ap.date <= end)
            console.log(start, end)
            console.log(apps)
            return (
                <div className="overall" >
                    <li>Total patients: {apps.length}</li>
                    <li>Total profit: {apps.profit}</li>
                    <h2>By departments:</h2>
                    {byDepartments(apps)}
                </div>
            )
        }
    }

    return (
        <div className="aboutPage">
            <div className="scrollable2">
                {appointments && calculate("all", "all")}

                <div className="ask">
                    <input type="date" id="dataStart" className="inputText" />
                    <input type="date" id="dataEnd" className="inputText" />
                    <button onClick={() => {
                        setShow(true)
                    }} className="switch">Show</button>
                    {show && document.getElementById("dataStart")(
                        <>
                            {calculate(document.getElementById("dataStart").value, document.getElementById("dataEnd").value)}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Report;