import React from "react";
import "../index.css"
import { useEffect, useState } from "react";

const Update = ({ show, backend, row, setEdit }) => {
    const [state, setState] = useState(row)

    useEffect(() => {
        (
          async () => {
            
          }
        )();
      }, [row])
    return (
        <div className="popup">
            <div onClick={() => setEdit(false)}>Close &times;</div>
            <div className="scrollable">
                {show ? (
                    <form action={`${backend}/api/updatePatient/${row.id}/`} method="PUT">
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
                        <input type="text" name="marital_status" className="inputText inputLower" placeholder="Marital status" required value={state.marital_status} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                        <button type="submit">Update!</button>
                    </form>
                ) : (
                    <form action={`${backend}/api/updateDoctor/${row.id}/`} method="PUT">
                        <input type="date" name="date_of_birth" className="inputText inputUpper" required value={state.date_of_birth}onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <input type="text" name="iin" className="inputText" placeholder="IIN" required value={state.iin}onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <input type="text" name="id_number" className="inputText" placeholder="ID number" required value={state.id_number}onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <input type="text" name="name" className="inputText" placeholder="Name" required value={state.name}onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <input type="text" name="surname" className="inputText" placeholder="Surname" required value={state.surname}onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <input type="text" name="middlename" className="inputText" placeholder="Middlename" required value={state.middlename}onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <input type="text" name="address" className="inputText" placeholder="Address" required value={state.address}onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <input type="text" name="contact_number" className="inputText" placeholder="Contact number" required value={state.contact_number}onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <select className="inputText" placeholder="Department" name="department_id" required value={state.department_id} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} >
                            <option value="department" disabled>Department</option>
                            <option value="medicine">Medicine</option>
                            <option value="surgery">Surgery</option>
                            <option value="gynecology">Gynecology</option>
                            <option value="obstetrics">Obstetrics</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="radiology">Radiology</option>
                            <option value="eye">Eye</option>
                            <option value="ENT">ENT</option>
                            <option value="dental">Dental</option>
                            <option value="orthopedics">Orthopedics</option>
                            <option value="neurology">Neurology</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="psychiatry">Psychiatry</option>
                            <option value="skin">Skin</option>
                        </select>
                        <select className="inputText" placeholder="Department" name="specialization_id" required value={state.specialization_id} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}>
                            <option value="specialization" disabled>Specialization</option>
                            <option value="general_practice">General Practice</option>
                            <option value="family_medicine">Family Medicine</option>
                            <option value="internal_medicine">Internal medicine</option>
                            <option value="anesthesiologist">Anesthesiologist</option>
                            <option value="physician_executive">Physician executive</option>
                        </select>
                        <input type="number" name="experience" className="inputText" placeholder="Years of experience" min={0} step={1} required value={state.experience} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <input type="text" name="category" className="inputText" placeholder="Category" required onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}} />
                        <select className="inputText" placeholder="Category" name="category" required value={state.category} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}>
                            <option value="no" disabled>No category</option>
                            <option value="second">Second category</option>
                            <option value="first">First category</option>
                            <option value="highest">Highest category </option>
                        </select>
                        <input type="number" name="price" className="inputText" placeholder="Price" min={0} required value={state.price} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                        <input type="text" name="schedule_details" className="inputText" placeholder="Schedule details" required value={state.schedule_details} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                        <input type="text" name="degree" className="inputText" placeholder="Degree (Bs / Ms)" required value={state.degree} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                        <input type="number" name="rating" className="inputText" placeholder="Rating out of 10" min={0} step={1} max={10} required value={state.rating} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                        <input type="text" name="homepage_url" className="inputText inputLower" placeholder="Homepage url" required value={state.homepage_url} onChange={(e) => {setState({...state, [e.target.name]: e.target.value})}}/>
                        <button type="submit">Create!</button>
                    </form>
                )}
            </div>
        </div>
    )
};

export default Update;