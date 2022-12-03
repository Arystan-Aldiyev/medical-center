import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./index.css"
import LoadingSpinner from "../loading";


const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [vertCode, setVertCode] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleValue = async (e) => {
        if (e.target.value.length === 6) {
            if (e.target.value.toUpperCase() === vertCode) {
                setIsLoading(true)
                const response = await fetch("http://localhost:8080/api/register", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                    body: JSON.stringify({
                        "email": email,
                        "name": name,
                        "surname": surname,
                        "password": password,
                    })
                }).then(response => response.json()).then((response) => {
                    console.log(response)
                    if (response.message === "success") {
                        navigate("/login")
                        setIsLoading(false)
                    } else {
                        alert("incorrect code");
                    }
                }).catch(() => {
                    setError("Something bad is happened - server error")
                });
            }
        }
        for (let i = 0; i < 6; i++) {
            let x = document.getElementById(`hr${i}`)
            i < e.target.value.length ? x.style.display = "block" : x.style.display = "none"
        }
    }

    const regNewUser = async (e) => {
        setIsLoading(true)
        let x = document.getElementById("verification")
        x.style.display !== "flex" ? x.style.display = "flex" : x.style.display = "none"
        const response = await fetch("http://localhost:8080/api/email-verification", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                "email":email,
            })
        }).then(response => response.json()).then((response) => {
            console.log(response)
            if (response.message === "email-exists") {
                alert("Email already exists! Try to log in to your account!")
                document.getElementById("verification").style.display = "none"
            } else if (response.token !== "invalid"){
                setVertCode(response.token)
            }
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false)
            setError("Something bad is happened - server error")
        });
    }

    return (
        <div className="RegistrationPageContainer">
            {error && <div>{error}</div>}
            <div id="verification" className="emailCode">
                { isLoading ? <LoadingSpinner /> :
                    <>
                        <h2>Verification</h2>
                        <p>We've sent you a verification code to your email, please write it bellow</p>
                        <hr id="hr0" style={{left:"16.4%"}} />
                        <hr id="hr1" style={{left:"27.7%"}} />
                        <hr id="hr2" style={{left:"39%"}} />
                        <hr id="hr3" style={{left:"50.7%"}} />
                        <hr id="hr4" style={{left:"62%"}} />
                        <hr id="hr5" style={{left:"73.5%"}} />
                        <input onChange={(e)=>(handleValue(e))} type="text" maxLength="6" />
                    </>
                }
            </div>
            <div className="registrationForm">
                <h2>Sign Up page</h2>
                <input className="RegistrationPageContainer-input1" id={"inputName"} placeholder={"Your Name"} onChange={e => setName(e.target.value)} />
                <input className="RegistrationPageContainer-input2" id={"inputSurname"} placeholder={"Your Surname"} onChange={e => setSurname(e.target.value)} />
                <input className="RegistrationPageContainer-input2" type={"email"} id={"inputEmail"} placeholder={"Email"} onChange={e => setEmail(e.target.value)} />
                <input className="RegistrationPageContainer-input3" type={"password"} id={"inputPassword"} placeholder={"Password"} onChange={e => setPassword(e.target.value)} />
                <button onClick={()=>regNewUser()}>Register</button>
            </div>

        </div>
    )
};

export default Register;