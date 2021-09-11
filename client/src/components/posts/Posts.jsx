import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
    // console.log(posts);
    return (
        <div className="posts">
            {
                posts.map((p, index) => {
                    return(
                        <Post post={p} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Posts;