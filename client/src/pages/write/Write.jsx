import "./write.css";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [file, setFile] = useState("");
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            username: user.username,
            title,
            desc,
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
            console.log(res);
            setImage(files.secure_url);
            newPost.photo = files.secure_url;
        }
        try {
            const res = await axiosInstance.post("/posts", newPost);
            window.location.replace("/");
        } catch (err) {
        
        }
    }
    return (
        <div className="write">
            {
                file &&
                (
                    <h3 style={
                        {
                  color:"gray"
                        }
                    }>Image Selected...</h3>
                )
                
            }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])} />
                    
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e=>setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"
                        onChange={e=>setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit"> Publish</button>
            </form>
            
        </div>
    )
}
