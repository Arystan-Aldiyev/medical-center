import React from "react";
import "../index.css"
import { useEffect, useState } from "react";

const UpdateMed = ({ backend, item, setEdit }) => {
    const [state, setState] = useState(item)

    return (
        <div className="popup D">
            <div onClick={() => setEdit(false)}>Close &times;</div>
            <div className="scrollable">
                <form action={`${backend}/api/updateMedicament/`} method="PUT">
                    <input type="text" name="name" className="inputText inpitUpper" placeholder="Name" required value={state.name} onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }} />
                    <input type="date" name="start_time" className="inputText" required value={state.start_time} onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }} />
                    <input type="date" name="end_time" className="inputText" required value={state.end_time} onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }} />
                    <input type="text" name="is_active" className="inputText inputLower" placeholder="Active? True/False" required value={state.is_active} onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }} />
                    <button type="submit">Update!</button>
                </form>
            </div>
        </div>
    )
};

export default UpdateMed;