import React from "react";
import "./experience.css";
import frontEndSkills from "../json/frontendSkill.json";
import backEndSkills from "../json/backendSkill.json";


const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((item) => (
              <div key={item.name}>
                <article className="experiance__about__card">
                  <img className="skill_icon" src={item.icon} alt={item.name} />
                  <h5>{item.name}</h5>
                  <small>{item.level}</small>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development and Other Skills</h3>
          <div className="experience__content">
            {backEndSkills.map((item) => (
              <div key={item.name}>
                <article className="experiance__about__card">
                  <img className="skill_icon" src={item.icon} alt={item.name} />
                  <h5>{item.name}</h5>
                  <small>{item.level}</small>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
