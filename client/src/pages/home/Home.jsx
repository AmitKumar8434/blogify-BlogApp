import { useState,useEffect } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import {axiosInstance} from "../../config";
// import axios from "axios";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/footer";


const Home = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axiosInstance.get("/posts"+search)
            setPosts(res.data);
            const u = await axiosInstance.get("/posts"+search)
        }
        fetchPosts()
    },[search])

    return (
        <>
             <Header />
            <div className="home">
                <Posts  posts={posts} />
            </div>
            <Footer/>
            </>
    )
}


export default Home;