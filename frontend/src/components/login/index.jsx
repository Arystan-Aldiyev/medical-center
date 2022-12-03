import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css"

const Login = ({setName}) => {
    const navigate = useNavigate();

    const [vertCode, setVertCode] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verEmail, setVerEmail] = useState("")
    const [changePopup, setChangePopup] = useState(true);
    const [newPassword, setNewPassword] = useState("");

    const handleValue = async (e) => {
        if (e.target.value.length === 6) {
            if (e.target.value.toUpperCase() === vertCode) {
                document.getElementById("emailCode").style.display = "none";
                document.getElementById("resetPassword").style.display = "flex";
            }
        }
        
        for (let i = 0; i < 6; i++) {
            let x = document.getElementById(`hr${i}`)
            i < e.target.value.length ? x.style.display = "block" : x.style.display = "none"
        }
    }

    const loginUser = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/api/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        }).then((response) => response.json()).then((data)=> {
            if (data.message === "unsuccessful") {
                alert("User not found");
            } else if (data.message === "incorrect password") {
                alert("Incorrect password")
            } else {
                setName(data.name);
                navigate("/")
                window.location.reload()
            }
        });
    }

    const ResetPassword = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/api/reset-password", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                "email":verEmail,
                "password": newPassword,
            })
        }).then((r) => r.json()).then((data)=> {
            console.log(data);
            if (data.message === "success") {
                window.location.reload()
            }
        }).catch((e) => console.log(e));
    }

    const verifyEmail = async (e) => {
        setIsLoading(true)
        await fetch("http://localhost:8080/api/email-verification", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                "email":verEmail,
            })
        }).then(response => response.json()).then((response) => {
            console.log(response)
            if (response.message !== "email-exists") {
                alert("try again")
                window.location.reload()
            }
            if (response.token !== "invalid"){
                setVertCode(response.token)
                setChangePopup(false)
            }
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false)
            setError("Something bad is happened - server error")
        });
    }

    return (
        <div className="loginPageContainer">
            <form onSubmit={loginUser}>
                <h1>Sign Up page</h1>
                <input className="loginPageContainer-input1" type={"email"} id={"inputEmail"} placeholder={"Email"} onChange={e => setEmail(e.target.value)} />
                <input className="loginPageContainer-input2" type={"password"} id={"inputPassword"} placeholder={"Password"} onChange={e => setPassword(e.target.value)} />
                <a href={"#"} onClick={() => {document.getElementById("loginVerPopup").style.display = "flex"}} style={{fontSize: "16px", color:"blue",}}><i>Forgot Paswrod?</i></a>
                <button onClick={loginUser}>Login</button>
            </form>
            <div className={"popup"} id={"loginVerPopup"}>
                {changePopup ? <>
                    <h1>Enter your email</h1>
                    <input onChange={(e) => setVerEmail(e.target.value)} placeholder={"email"} />
                    <button onClick={(e) => verifyEmail(e)}>Click me</button>
                    </> :
                    <div className={"emailCode"} id="emailCode">
                        <h2>Verification</h2>
                        <p>We've sent you a verification code to your email, please write it bellow</p>
                        <hr id="hr0" style={{left:"16.4%"}} />
                        <hr id="hr1" style={{left:"27.7%"}} />
                        <hr id="hr2" style={{left:"39%"}} />
                        <hr id="hr3" style={{left:"50.7%"}} />
                        <hr id="hr4" style={{left:"62%"}} />
                        <hr id="hr5" style={{left:"73.5%"}} />
                        <input onChange={(e) => {handleValue(e)}} type="text" maxLength="6" />
                    </div>
                }
                <div className="resetPassword" id="resetPassword">
                    <h1>Enter New Password</h1>
                    <input type="text" placeholder="New Password" onChange={(e) => {setNewPassword(e.target.value)}}/>
                    <button onClick={(e) => {ResetPassword(e)}}>Submit new password</button>
                </div>
            </div>
        </div>
    )
};

export default Login;