import { useLocation, useNavigate } from 'react-router-dom';
import React from "react";
import "../index.css"

const Services = ({ services }) => {

    return (
        <>
            {services ? (
                <div className="servicesList">
                    <nav className="navigation">
                        <ul>
                            <li>
                                {Object.keys(services).map((department) => (
                                    <a href={`#${department}`} key={department}>{department}</a>
                                ))}
                            </li>
                        </ul>
                    </nav>
                    {/* {Object.keys(services).map((service) => (
                        <div className='service' key={service}>{service}</div>
                    ))} */}
                </div>
            ) : (
                <div>loading</div>
            )}
        </>
    )
};

export default Services;