import React, { useRef } from "react";
import "../portfolio/project.css";
import { projects } from '../../components/json/projects.js';
// import imag from "../../assets/portfolio-project.png"

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && <a href={github} className="btn">
                  Github
                </a>}
                {brief && <a href={brief} className="btn">
                  Project Brief
                </a>}
              </div>
              <div className="portfolio__item-cta">
                {demo && <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
