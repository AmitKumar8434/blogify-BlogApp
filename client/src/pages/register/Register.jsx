import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import Footer from "../../components/footer/footer";
// import axios from "axios";
import { axiosInstance } from "../../config";


export default function Register() {
       
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]=useState(false);
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axiosInstance.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <div className="registerWrapper">
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your username..."
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <label>Email</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your Email..."
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter your Password..."
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <button
                    className="registerButton" type="submit" >Register</button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login" className="link">LOGIN</Link>
            </button>
                {error && <span style={{ color: "red", marginTop: "10px" }}>Something Went Wrong!</span>}
                <img className="rimg" src="./img/register.svg" alt="svg" />
            </div>
            <Footer/>
            </div>
    )
}
