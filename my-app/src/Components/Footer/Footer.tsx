import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <a className="gitLink" href="https://github.com/AntonOgonovskiy">
        GitHub
      </a>
      <p>2022</p>
      <div>
        <a href="https://rs.school">
          <img
            className="rssLink"
            src="https://sun1-25.userapi.com/LTn69iy3-iWdSaPWOmOg7Oygc4R4f3pvMT7qOw/GtiJVh7NIkw.jpg"
            alt="Board"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
