import React from "react";
import "./experience.css";
import { BsGithub, BsFillBootstrapFill } from "react-icons/bs";
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoCss3, BiLogoJavascript} from "react-icons/bi";
import {GiMaterialsScience} from "react-icons/gi";
import {FaReact, FaNode, FaPython, FaDatabase} from "react-icons/fa";
import {TbBrandCpp} from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS / SASS(SCSS)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBootstrapFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <GiMaterialsScience className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development and Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNode className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaDatabase className="experience__details-icon" />
              <div>
                <h4>Data Structures</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandCpp className="experience__details-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsGithub className="experience__details-icon" />
              <div>
                <h4>Git/Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
