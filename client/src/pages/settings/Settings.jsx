import { useContext,useState } from "react";
import { Context } from "../../context/Context";
import "./settings.css";
import Footer from "../../components/footer/footer";
// import axios from "axios";
import { axiosInstance } from "../../config";

export default function Settings() {
    const { user,dispatch } = useContext(Context);
    const [file, setFile] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState("");
    const [updating, setUpdating] = useState(false);
    // const PF = "https://blogifyamit.herokuapp.com/images/";
    
    const handleSubmit = async (e) => {
        setUpdating(true);
        e.preventDefault();
         dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            data.append("file", file);
            data.append('upload_preset', 'qjcq3oqb');
            const res = await fetch('https://api.cloudinary.com/v1_1/dlmhozjwi/image/upload', {
                method: 'POST',
                body:data
            })
            const files = await res.json();
            setImage(files.secure_url);
            console.log(files);
            updatedUser.profilePic = files.secure_url;
            try {
                await axiosInstance.post("/upload", data);
            } catch(err) {
                
            }
        }
        try {
            const res = await axiosInstance.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
        setUpdating(false);
        e.target.reset();
    }
    const handleDelete = async() => {
        try {
            await axiosInstance.delete(`/users/${user._id}`, {
               data:{userId:user._id}
           });
            dispatch({ type: "LOGOUT" });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                <img className="" src={user.profilePic}
                    alt=""
                />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        onChange={e=>setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} autoFocus/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
                    <label>PassWord</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)} />
                    <button className="settingsSubmit" type="submit">Update</button>
                        {success && <span style={{ color: "green", textAlign: "center", marginTop: "20px" }} > Profile Updated!</span>}
                        {updating && <span style={{color:"green",textAlign:"center",marginTop:"20px"}} > Updating...</span>}
                </form>
                </div>
                <img className="svg" src = "./img/1.svg" alt="My Happy SVG"/>
        </div>
            <Footer />
            </>
    )
}
