import { useEffect,useState,useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlepost.css";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
// import axios from "axios";

export default function SinglePost() {
    const { user } = useContext(Context);
    // const PF = "https://blogifyamit.herokuapp.com/images/";
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {

        const getPost = async () => {
            const res = await axiosInstance.get("/posts/"+ path).catch(error => console.error(error));
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            });
            window.location.replace("/");
        }
        catch(err){}
    }

    const handleUpdate = async () => {
        try {
            await axiosInstance.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false);
        }
        catch(err){}
        
    }


    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                     <img className="singlePostImg" src={post.photo}
                     alt=""
                 />
                )}
                {
                    updateMode ? <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => { setTitle(e.target.value) }}
                    /> : (
                        
                <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={ handleDelete }></i>
                        </div>
                    )}
                </h1>
                            )
                        }
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                    <Link className="link" to={`/?user=${post.username}`}> <b>{post.username}</b></Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ?
                    (<textarea
                        className="singlePostDescInput"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }}
                    />)
                    : (
                    <p className="singlePostDesc">
                        {desc}
                    </p>
                )
                }
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate} >Update</button>
                )}
            </div>
        </div>
    )
}