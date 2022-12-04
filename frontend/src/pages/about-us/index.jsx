import React, { useEffect, useState } from "react";
import "../index.css"
import Header from "../../components/header";
import medical from '../../assets/medical.jpg'
import comp from '../../assets/comp.jpg'
import med from '../../assets/doctor.jpg'
import Services from "../../components/services";

const About = ({ userInfo }) => {

    const [services, setServices] = useState()
    useEffect(() => {
        (
            async () => {
                // const response = await fetch(``, {
                //     headers: { 'Content-Type': 'application/json' },
                // });
                // const data = await response.json()
                const data = {
                    "medicine": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "surgery": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "gynecology": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "obstetrics": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "pediatrics": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "radiology": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "eye": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "ENT": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "dental": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "orthopedics": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "neurology": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "cardiology": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "psychiatry": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"],
                    "skin": ["some procedure", "some procedure", "some procedure", "some procedure", "some procedure", "some procedure"]
                }
                setServices(data)
            }

        )();
    }, [])

    return (
        <div className="aboutPage">
            <div className="upper">
                <Header userInfo={userInfo} />
                <img src={medical} alt="Background image" className="upperImg" />
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
                    <img src={comp} alt="Image" className="aboutImg" />
                    <div className="words">
                        <h1>Our vision:</h1>
                        <h3>A company that makes it hard to stay ill</h3>
                        <h3>A company that provides comfort in all its services</h3>
                        <h3>A company that really cares about clients' health</h3>
                        <h3>A company that wants to become a golden standard for all the healthcare providers</h3>

                        <h1>-----------------------</h1>
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
                    <img src={med} alt="Image" className="aboutImg" />
                </div>
            </div>
            <div className="servicesAbout" id="services">
                {/* <Services services={services} /> */}
                тут потом услуги
            </div>
            {/* {services ? Object.keys(services).forEach((key) => {
                console.log(key + ":\n" + services[key])
            }) : console.log('netu')} */}

        </div>
    )
};

export default About;