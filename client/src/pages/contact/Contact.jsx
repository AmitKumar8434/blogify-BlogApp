import React from 'react';
import "./contact.css";
import emailjs from "emailjs-com";
import Footer from "../../components/footer/footer"


export default function Contact() {
    const sendEmail=(e)=>{
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_t6ossyj', 'template_v29vb3d', e.target, 'user_RFaxSHsvo0eLHuqg09ruR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
    }
    return (
        <div className="contact">
            <div className="container">
            <div className="contactTitle">Get in Touch</div>
                <div className="info">
            <form className="contactForm" onSubmit={sendEmail}>
                <label>Name</label>
                <input
                    type="text"
                    className="contactInput"
                            placeholder="Enter your Name..."
                            name="name"
                />
                <label>Email</label>
                <input
                    type="email"
                    className="contactInput"
                            placeholder="Enter your email..."
                            name="email"
                        />
               <label>Subject</label>
                <input
                    type="text"
                    className="contactInput"
                            placeholder="Enter subject..."
                            name="subject"
                        />
                <label>message</label>
                <input
                    type="text"
                    className="contactInput"
                            placeholder="Enter your message..."
                            name="message"
                />
                <input className="sendButton" type="submit" value="Send message"></input>      
            </form>
                </div>
                <label> or </label>
                <div className="others">
                <a target="blank" href="https://www.facebook.com/profile.php?id=100008312089904">
                <i className="othersItem F fab fa-facebook-square"></i>
                    </a>
                <a target="blank" href="https://twitter.com/AmitKum75795754">
                <i className="othersItem T fab fa-twitter-square"></i>
                    </a>
                <a target="blank" href="https://www.linkedin.com/in/amit-kumar-b1a08b1b5/">
                <i className="othersItem L fab fa-linkedin"></i>
                    </a>
                <a target="blank" href="https://www.instagram.com/a.m.i.t_k.umar/">
                <i className="othersItem I fab fa-instagram-square"></i>
                  </a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
