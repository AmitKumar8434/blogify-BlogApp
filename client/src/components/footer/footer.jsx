import React from 'react';
import "./footer.css";


const Footer = () => {
    const year = new Date().getFullYear();

  return (
      <>
          <footer>
                <div className="sidebarSocial">
                <a target="blank" href="https://www.facebook.com/profile.php?id=100008312089904">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                    </a>
                <a target="blank" href="https://twitter.com/AmitKum75795754">
                <i className="sidebarIcon fab fa-twitter-square"></i>
                    </a>
                <a target="blank" href="https://www.linkedin.com/in/amit-kumar-b1a08b1b5/">
                <i className="sidebarIcon fab fa-linkedin"></i>
                    </a>
                <a target="blank" href="https://www.instagram.com/a.m.i.t_k.umar/">
                <i className="sidebarIcon fab fa-instagram-square"></i>
                  </a>
              </div>
              <p>Follow us</p>
              <p> Blogify ©️{year} copyright </p>
          </footer>
    </>
  );
}

export default Footer;