import {axiosInstance} from "../../config";
// import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import Footer from "../../components/footer/footer";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const [logging, setLogging] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const {dispatch, isFetching } = useContext(Context);

    
    const handleSubmit = async (e) => {
        setLogging(true);
        setInvalid(false);
        e.preventDefault()
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axiosInstance.post("/auth/login", {
               username: userRef.current.value,
               password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            setLogging(false);
        } catch (err) {
            setInvalid(true);
            setLogging(false);
            dispatch({ type: "LOGIN_FAILURE"});
        }
    }
 
    return (
        <div className="login">
             <span className="loginTitle">Login</span>
            <div className="loginWrapper">
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your Password..."
                    ref={passwordRef}
                />
                    <button className="loginButton" type="submit" disabled={isFetching}>Login</button> 
                    {logging && <span style={{ color: "green", textAlign: "center", marginTop: "20px" }} > Logging in...</span>}  
                    {invalid && <span style={{color:"red",textAlign:"center",marginTop:"20px"}} > Invalid Credentials!!</span>}
            </form>
            <button className="loginRegisterButton">
                <Link to="/register" className="link">REGISTER</Link>
                </button>
                <img className="limg" src="./img/login.svg" alt="svg" />
            </div>
            <Footer/>
            </div>
    )
}
