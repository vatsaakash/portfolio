import React from "react";
import CTA from "./CTA";
import header_picture from "../../assets/akash.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Akash Ranjan</h1>
        <h4 className="text-light">React and Frontend Developer</h4>
        <CTA />
        <HeaderSocials />
        <div className="akash">
          <img className="akash-img" src={header_picture} alt="Akash Ranjan" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
