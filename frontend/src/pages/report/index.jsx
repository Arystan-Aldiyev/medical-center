import React from "react";
import "../index.css"

const Report = ({ appointments }) => {

    const profit = (apps) => {
        let result = 0
        apps.map((item) => {
            result += item
        })
        return result
    }

    const calculate = (start, end) => {
        if (start === "all") {
            return {
                patients: appointments.length,
                profit: profit(appointments)
            }
        }
        const apps = appointments.filter((ap) => {
            const data = new Date(ap.date)
            return start <= data && data <= end
        })
        return {
            patients: apps.length,
            profit: profit(apps)
        }
    }

    return (
        <div className="aboutPage">
            <div className="scrollable2">
                <div className="overall">
                    <li>Total patients: {() => calculate("all", "s").patients}</li>
                    <li>Total profit: {() => calculate("all", "s").profit}</li>
                </div>
                <div className="ask">
                    alsvlasf
                </div>
            </div>
        </div>
    )
};

export default Report;