import React from "react";
import "../index.css"
import { v4 as uuidv4 } from 'uuid';

const Services = ({ services, itemToSearch }) => {
    const columns = ['Procedure', 'Department', 'Price', 'Contraindications']
    console.log(itemToSearch)
    let filteredList = services
    filteredList = typeof (itemToSearch) !== "undefined" ? filteredList?.filter((item) => item.procedure.toLowerCase().includes(itemToSearch) || item.department.toLowerCase().includes(itemToSearch) || item.price.toLowerCase().includes(itemToSearch) || item.contraindications.toLowerCase().includes(itemToSearch)) : filteredList
    return (
        // WTF?
        <div className="servicesList">
            <table>
                <thead>
                    <tr>
                        {filteredList && columns.map((col) => (
                            <th key={col}>{col}</th>
                        ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {filteredList && filteredList.map((row) => (
                        <tr key={uuidv4()}>
                            <td key={uuidv4()}>{row.procedure}</td>
                            <td key={uuidv4()}>{row.department}</td>
                            <td key={uuidv4()}>{row.price}</td>
                            <td key={uuidv4()}>{row.contraindications}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Services;