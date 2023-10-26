import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaHackerrank } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
