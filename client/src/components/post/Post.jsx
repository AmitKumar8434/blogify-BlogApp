import "./post.css";
import {Link} from "react-router-dom";

export default function Post({ post }) {
    // const PF = "https://blogifyamit.herokuapp.com/images/";


    return (
        <div className="post-wrapper">
        <div className="post" >
            {post.photo && (
                <Link className="link" to={`/post/${post._id}`}>
                <img className="postImg"
                    src={post.photo}
                    alt=""
                />
                </Link>
            )}
            <div className="postInfo">
                <div className="postCats">
                    {
                        post.categories.map((c) => (
                            <span className="postCat">{c.name}</span>
                        ))
                    }
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                <span className="postTitle">
                    {post.title}
                    </span>
                </Link>
                <Link className="link" to={`/?user=${post.username}`}>
                <span className="postAuthor">
                     Author : {post.username}
                </span>
                </Link>
                <hr />
                <span className="postDate">{ new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{ post.desc}</p>
            </div>
            </div>
    )
}