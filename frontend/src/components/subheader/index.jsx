import React from "react";
import Keywords from "./mini";
import "./index.css"

const SubHeader = () => {
    const fakeData = ['With expirience', 'Internship', 'Field', 'Another field', 'One more field', 'Push', 'One More', "That's the mentality you gotta have"]
    return (
        <div className="subheader">
            <div className="subheaderContent">
                <div className="scrollable-div">
                    {fakeData.map((item) => (
                        <Keywords item={item} key={item} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default SubHeader;
