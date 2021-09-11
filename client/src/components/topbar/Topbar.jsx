import { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";


const TopBar = () => {
    const [mobile, setMobile] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { user, dispatch } = useContext(Context);
    // const PF = "https://blogifyamit.herokuapp.com/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    useEffect(() => {
        setMobile(false);
        setToggle(false);
    },[toggle]);

    return (
        <div className ={mobile?"top responsive":"top"}>
            <div className="topLeft">
                <img className="titleImg" src="./img/title.png" alt="title" />
                <Link to="/" className="link">
                <h1>BlogifY</h1>
                </Link>
            </div>
            <div className={mobile?"topCenter responsive":"topCenter"}>
                <ul className="topList">
                    <li className="topListItem" onClick={()=>setToggle(true)}>
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem" onClick={()=>setToggle(true)}>
                    <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/contact" className="link" onClick={()=>setToggle(true)}>CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/write" className="link" onClick={()=>setToggle(true)}>WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className={mobile?"topRight responsive":"topRight"}>
                {
                    user ? (
                        <Link to="/settings">
                            <img className="topImg" src={user.profilePic}
                                onClick={()=>setToggle(true)}
                        alt=""
                            />
                        </Link>
                    )
                        : (
                            <ul className="topList">
                                <li className="topListItem">
                                <Link to="/login" className="link" onClick={()=>setToggle(true)}>LOGIN</Link>
                                </li>
                                <li className="topListItem">
                                <Link to="/register" className="link" onClick={()=>setToggle(true)}>REGISTER</Link>
                                </li>
                            </ul>
                        )
                }
            </div>
            <i className="hamburger fas fa-bars" onClick={()=>setMobile(!mobile)}></i>
        </div>
    )
}
export default TopBar;