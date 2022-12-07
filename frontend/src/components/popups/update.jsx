import React from "react";
import "../index.css"
import { useEffect } from "react";

const Update = ({ show, backend, row, setEdit }) => {

    // useEffect(() => {
    //     (
    //         async () => {
    //             console.log(itemToSearch)
    //             if (show) {
    //                 console.log(itemToSearch)
    //                 const temp = itemToSearch !== "" ? patients?.filter((item) => item.id_number.toLowerCase().includes(itemToSearch) || item.iin.toLowerCase().includes(itemToSearch)) : patients
    //                 updateFilter(temp)
    //             } else {
    //                 const temp = itemToSearch !== "" ? doctors?.filter((item) => item.id_number.toLowerCase().includes(itemToSearch) || item.iin.toLowerCase().includes(itemToSearch)) : doctors
    //                 updateFilter(temp)
    //             }
    //         }
    //     )();
    // }, [itemToSearch])

    return (
        <div className="popup">
            <div onClick={() => setEdit(false)}>Close &times;</div>
            <div className="scrollable">
                {show ? (
                    <form action={`${backend}/api/updatePatient/${row.id_number}/`} method="PUT">
                        <input type="date" name="date_of_birth" className="inputText inputUpper" required value={row.date_of_birth}/>
                        <input type="text" name="iin" className="inputText" placeholder="IIN" required value={row.iin}/>
                        <input type="text" name="id_number" className="inputText" placeholder="ID number" required value={row.id_number}/>
                        <input type="text" name="name" className="inputText" placeholder="Name" required value={row.name}/>
                        <input type="text" name="surname" className="inputText" placeholder="Surname" required value={row.surname}/>
                        <input type="text" name="middlename" className="inputText" placeholder="Middlename" required value={row.middlename}/>
                        <input type="text" name="blood_group" className="inputText" placeholder="Blood group" required value={row.blood_group}/>
                        <input type="text" name="emergency_contact_number" className="inputText" placeholder="Emergency concact number" required value={row.emergency_contact_number}/>
                        <input type="text" name="contact_number" className="inputText" placeholder="Contact number" required value={row.contact_number}/>
                        <input type="text" name="address" className="inputText" placeholder="Address" required value={row.address}/>
                        <input type="text" name="marital_status" className="inputText" placeholder="Marital status" required value={row.marital_status}/>
                        <input type="text" name="password" className="inputText inputLower" placeholder="Password" required value={row.password}/>
                        <button type="submit">Update!</button>
                    </form>
                ) : (
                    <form action={`${backend}/api/updateDoctor/${row.id_number}/`} method="PUT">
                        <input type="date" name="date_of_birth" className="inputText inputUpper" required value={row.date_of_birth}/>
                        <input type="text" name="iin" className="inputText" placeholder="IIN" required value={row.iin}/>
                        <input type="text" name="id_number" className="inputText" placeholder="ID number" required value={row.id_number}/>
                        <input type="text" name="name" className="inputText" placeholder="Name" required value={row.name}/>
                        <input type="text" name="surname" className="inputText" placeholder="Surname" required value={row.surname}/>
                        <input type="text" name="middlename" className="inputText" placeholder="Middlename" required value={row.middlename}/>
                        <input type="text" name="address" className="inputText" placeholder="Address" required value={row.address}/>
                        <input type="text" name="contact_number" className="inputText" placeholder="Contact number" required value={row.contact_number}/>
                        <select className="inputText" placeholder="Department" name="department_id" required value={row.department_id}>
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
                        <select className="inputText" placeholder="Department" name="specialization_id" required value={row.specialization_id}>
                            <option value="specialization" selected disabled>Specialization</option>
                            <option value="general_practice">General Practice</option>
                            <option value="family_medicine">Family Medicine</option>
                            <option value="internal_medicine">Internal medicine</option>
                            <option value="anesthesiologist">Anesthesiologist</option>
                            <option value="physician_executive">Physician executive</option>
                        </select>
                        <input type="number" name="experience" className="inputText" placeholder="Years of experience" min={0} step={1} required value={row.experience}/>
                        <input type="text" name="category" className="inputText" placeholder="Category" required />

                        <input type="number" name="price" className="inputText" placeholder="Price" min={0} required value={row.price}/>
                        <input type="text" name="schedule_details" className="inputText" placeholder="Schedule details" required value={row.schedule_details}/>
                        <input type="text" name="degree" className="inputText" placeholder="Degree (Bs / Ms)" required value={row.degree}/>
                        <input type="number" name="rating" className="inputText" placeholder="Rating out of 10" min={0} step={1} max={10} required value={row.rating}/>
                        <input type="text" name="homepage_url" className="inputText" placeholder="Homepage url" required value={row.homepage_url}/>
                        <input type="text" name="password" className="inputText inputLower" placeholder="Password" required value={row.password}/>
                        <button type="submit">Create!</button>
                    </form>
                )}
            </div>
        </div>
    )
};

export default Update;