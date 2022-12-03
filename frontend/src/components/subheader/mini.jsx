import React, { useState } from "react";
import { ReactComponent as CrossIcon } from '../../assets/cross.svg'

const Keywords = ({ item }) => {
    const [on, turnOn] = useState(false)
    return (
        on ? (
            <>
                <div key={item} className="keyWords Selected" onClick={() => { turnOn(false) }}>
                    <CrossIcon className="crossIcon" />{item}
                </div>
            </>
        ) : (
            <div key={item} className="keyWords" onClick={() => { turnOn(true) }}>{item}</div>
        )
    )
};

export default Keywords;
