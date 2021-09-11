import "./single.css";
// import SideBar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
// import { Context } from "../../context/Context";
// import {useContext } from "react";


export default function Single() {
    // const { user } = useContext(Context);
    return (
        <div className="single">
            <SinglePost />
            {/* {user &&
                <SideBar />
            } */}
        </div>
    )
}