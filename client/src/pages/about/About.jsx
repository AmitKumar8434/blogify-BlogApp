import React from 'react';
import "./about.css";
import Footer from "../../components/footer/footer"


export default function About() {
    return (
        <div className="about">
            <div className="title">
            <h1>Meet the Developer</h1>
            </div>
            <img className="mypic" src="./img/pp.jpg" alt="MyPic"/>
            <div className="first">
                <h2>My Name is <strong> Amit Kumar</strong>.
                A <strong>COMPUTER SCIENCE</strong> and ENGINEERING student at Academy of Technology, Adisaptgram.
                Graduating in 2023 and looking for a responsible position to gain practical Knowledge.
                A <strong>FULL-STACK</strong> Web Developer and a <strong>COMPETITIVE</strong> Coder.
                </h2>
                    <img className="firstsvg" src = "./img/laptop.svg" alt="My Happy SVG"/>
            </div>
            <div className="second">
                <h2>
                    This is a <strong>BLOG app</strong> where you can share your memories,stories..etc.
                    I have used<strong> reactJs</strong> as <strong>Frontend</strong> and <strong>Node </strong> and <strong>Express </strong>
                     as <strong>Backend</strong>.
                    For <strong>Database</strong> I have used <strong>MONGODB</strong>.
                    This is a Complete <strong>Responsive</strong> website to enhance experience for both mobile as well as desktop user.
                    I want to make web a better place to all and giving best experience to All.
                </h2>
                    <img className="secondsvg" src = "./img/super.svg" alt="My Happy SVG"/>
                </div>
            <Footer/>
        </div>
    )
}
