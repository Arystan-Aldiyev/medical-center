import React from "react";
import "../index.css"
import { useEffect } from "react";

const Create = ({ show, backend, setAdd }) => {

    return (
        <div className="popup">
            <div onClick={() => setAdd(false)}>Close &times;</div>
            <div className="scrollable">
                {show ? (
                    <form action={`${backend}/api/createPatient`} method="POST">
                        <input type="date" name="date_of_birth" className="inputText inputUpper" required />
                        <input type="text" name="iin" className="inputText" placeholder="IIN" required />
                        <input type="text" name="id_number" className="inputText" placeholder="ID number" required />
                        <input type="text" name="name" className="inputText" placeholder="Name" required />
                        <input type="text" name="surname" className="inputText" placeholder="Surname" required />
                        <input type="text" name="middlename" className="inputText" placeholder="Middlename" required />
                        <input type="text" name="blood_group" className="inputText" placeholder="Blood group" required />
                        <input type="text" name="emergency_contact_number" className="inputText" placeholder="Emergency concact number" required />
                        <input type="text" name="contact_number" className="inputText" placeholder="Contact number" required />
                        <input type="text" name="address" className="inputText" placeholder="Address" required />
                        <input type="text" name="marital_status" className="inputText" placeholder="Marital status" required />
                        <input type="text" name="password" className="inputText inputLower" placeholder="Password" required />
                        <button type="submit">Create!</button>
                    </form>
                ) : (
                    <form action={`${backend}/api/createDoctor`} method="POST">
                        <input type="date" name="date_of_birth" className="inputText inputUpper" required />
                        <input type="text" name="iin" className="inputText" placeholder="IIN" required />
                        <input type="text" name="id_number" className="inputText" placeholder="ID number" required />
                        <input type="text" name="name" className="inputText" placeholder="Name" required />
                        <input type="text" name="surname" className="inputText" placeholder="Surname" required />
                        <input type="text" name="middlename" className="inputText" placeholder="Middlename" required />
                        <input type="text" name="address" className="inputText" placeholder="Address" required />
                        <input type="text" name="contact_number" className="inputText" placeholder="Contact number" required />
                        <select className="inputText" placeholder="Department" name="department_id" required >
                            <option value="department" selected disabled>Department</option>
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
                        <select className="inputText" placeholder="Department" name="specialization_id" required>
                            <option value="specialization" selected disabled>Specialization</option>
                            <option value="general_practice">General Practice</option>
                            <option value="family_medicine">Family Medicine</option>
                            <option value="internal_medicine">Internal medicine</option>
                            <option value="anesthesiologist">Anesthesiologist</option>
                            <option value="physician_executive">Physician executive</option>
                        </select>
                        <input type="number" name="experience" className="inputText" placeholder="Years of experience" min={0} step={1} required />
                        <input type="text" name="category" className="inputText" placeholder="Category" required />

                        <input type="number" name="price" className="inputText" placeholder="Price" min={0} required />
                        <input type="text" name="schedule_details" className="inputText" placeholder="Schedule details" required />
                        <input type="text" name="degree" className="inputText" placeholder="Degree (Bs / Ms)" required />
                        <input type="number" name="rating" className="inputText" placeholder="Rating out of 10" min={0} step={1} max={10} required />
                        <input type="text" name="homepage_url" className="inputText" placeholder="Homepage url" required />
                        <input type="text" name="password" className="inputText inputLower" placeholder="Password" required />
                        <button type="submit">Create!</button>
                    </form>
                )}
            </div>
        </div>
    )
};

export default Create;