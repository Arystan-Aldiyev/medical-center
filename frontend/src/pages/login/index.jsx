import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"

const Login = ({ backend }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`${backend}/api/login/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        }).then((response) => response.json()).then((data) => {
            if (data.message === "Invalid username or password!") {
                alert(data.message);
            } else {
                navigate("/")
            }
        });
    }
    return (
        <div className="loginPage">
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <input name="username" className="inputText inputUpper" type="text" id="inputText" placeholder="Name Surname" onChange={(e) => setUsername(e.target.value)} />
                <input name="password" className="inputText inputLower" type="text" id="inputText" placeholder="Your password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;