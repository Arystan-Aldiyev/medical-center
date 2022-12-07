import React, { useState } from "react";
import "../index.css"

const Report = ({ patients, doctors, backend }) => {

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