import React, { useEffect, useState } from "react";
import "../index.css"
import Header from "../../components/header";
import medical from '../../assets/medical.jpg'
import comp from '../../assets/comp.jpg'
import med from '../../assets/doctor.jpg'
import Services from "../../components/services";
import Search from "../../components/search";

const About = ({ userInfo }) => {
    const [itemToSearch, setItemToSearch] = useState("")
    const [services, setServices] = useState()
    useEffect(() => {
        (
            async () => {
                // const response = await fetch(``, {
                //     headers: { 'Content-Type': 'application/json' },
                // });
                // const data = await response.json()
                setServices([{
                    department: "Radiology",
                    procedure: "MRI",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Radiology",
                    procedure: "Ultrasound",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Radiology",
                    procedure: "Computer Tomography scanning",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Radiology",
                    procedure: "X-ray scanning",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Medicine",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Medicine",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Medicine",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Medicine",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Surgery",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Surgery",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Surgery",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Surgery",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Gynecology",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Gynecology",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Gynecology",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Gynecology",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Obsterics",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Obsterics",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Obsterics",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Obsterics",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Pediatrics",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Pediatrics",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Pediatrics",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Pediatrics",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Eye",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Eye",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Eye",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Eye",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "ENT",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "ENT",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "ENT",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "ENT",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Orthopedics",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Orthopedics",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Orthopedics",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Orthopedics",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Neurology",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Neurology",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Neurology",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Neurology",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Cardiology",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Cardiology",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Cardiology",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Cardiology",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Psychiatry",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Psychiatry",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Psychiatry",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Psychiatry",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Skin",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Skin",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Skin",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Skin",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Dental",
                    procedure: "procedure 1",
                    price: "$100",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Dental",
                    procedure: "procedure 2",
                    price: "$200",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Dental",
                    procedure: "procedure 3",
                    price: "$300",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }, {
                    department: "Dental",
                    procedure: "procedure 4",
                    price: "$400",
                    contraindications: "bla bla bla bla bla bla bla bla"
                }
                ])
            }
        )();
    }, [])

    return (
        <div className="aboutPage">
            <div className="upper">
                <Header userInfo={userInfo} />
                <img src={medical} alt="" className="upperImg" />
                <div className="bg-text">
                    <h1>Enjoy  <span style={{ color: "#656293" }}> Qualitative service</span></h1>
                    <p>Stay healthy with us!</p>
                    <p className="bg-moved">
                        {/* If logged in, then scroll to list of services */}

                        {/* If not, then redirect to login page */}
                        <a href="/login">Explore now &#8594;</a>
                    </p>
                </div>
            </div>
            <div className="aboutInfo" id="about">
                <div className="infoBlock">
                    <img src={comp} alt="" className="aboutImg" />
                    <div className="words">
                        <h1>Our vision:</h1>
                        <h3>A company that makes it hard to stay ill</h3>
                        <h3>A company that provides comfort in all its services</h3>
                        <h3>A company that really cares about clients' health</h3>
                        <h3>A company that wants to become a golden standard for all the healthcare providers</h3>
                        <h3>-----------------------</h3>

                        <h3 style={{ fontSize: "60px", padding: "0" }}>31 BRANCHES</h3>
                        <h3 style={{ fontSize: "50px" }}>22 CITIES</h3>
                        <h3 style={{ fontSize: "40px" }}>6 COUNTRIES</h3>
                        <h3 style={{ fontSize: "30px" }}>and we're just getting started</h3>
                    </div>
                </div>
            </div>
            <div className="aboutInfo" id="contacts">
                <div className="infoBlock">
                    <div className="words">
                        <h1>Why should you choose us</h1>
                        <h3>24/7 support</h3>
                        <h3>Guaranteed quality</h3>
                        <h3>Certified specialists</h3>
                        <h3>Modern equipment</h3>
                        <h3>Innovative treatment approach</h3>
                        <h3>Digitalized information both about patients and doctors</h3>

                        <h1>Our contacts:</h1>
                        <h3><a href="tel:+77777777777">+7 (777)-777-77-77</a></h3>
                        <h3><a href="mailto:somerandomclinicemail@bestmedicalcenter.com">somerandomclinicemail@bestmedicalcenter.com</a></h3>
                        <h3>1881 Poe Road, Myrtle Beach, South Carolina</h3>
                    </div>
                    <img src={med} alt="" className="aboutImg" />
                </div>
            </div>
            <div className="servicesAbout" id="services">
                <Search itemToSearch={itemToSearch} setItemToSearch={setItemToSearch} />
                <Services services={services} itemToSearch={itemToSearch} />
            </div>
        </div>
    )
};

export default About;