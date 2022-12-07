import React from "react";
import "../index.css"

const Report = ({ appointments }) => {

    const calculate = (start, end) => {
        console.log("a")
        
        return (
            <div>тут крч думаю найти стороннюю библиотеку</div>
        )
    }

    return (
        <div className="aboutPage">
            <div className="scrollable2">
                <div className="overall">
                    По периодам:

                    Тут крч общее кол-во процедур
                    Тут же кол-во пациентов и прибыль
                </div>
            </div>
        </div>
    )
};

export default Report;