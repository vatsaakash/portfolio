import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaHackerrank } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Akash Ranjan
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/vatsaakash/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/vatsaakash">
        <FaGithub />
      </a>
      <a href="https://www.hackerrank.com/profile/vatsa_akash">
        <FaHackerrank />
      </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Akash Ranjan. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
