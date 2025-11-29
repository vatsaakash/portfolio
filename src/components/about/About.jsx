import React from "react";
import profile_picture from "../../assets/akash2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const About = () => {
  const calculateAge = (inputDate) => {
    const today = new Date();
    const selectedDate = new Date(inputDate);

    const birthDetails = {
      date: selectedDate.getDate(),
      month: selectedDate.getMonth() + 1,
      year: selectedDate.getFullYear(),
    };

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();

    const isFutureDate =
      birthDetails.year > currentYear ||
      (birthDetails.year === currentYear &&
        (birthDetails.month > currentMonth ||
          (birthDetails.month === currentMonth && birthDetails.date > currentDate)));

    if (isFutureDate) {
      return { years: '-', months: '-', days: '-' };
    }

    let years = currentYear - birthDetails.year;
    let months = currentMonth - birthDetails.month;
    let days = currentDate - birthDetails.date;

    if (currentMonth < birthDetails.month) {
      years--;
      months = 12 - (birthDetails.month - currentMonth);
    }

    if (currentDate < birthDetails.date) {
      months--;
      const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const daysInLastMonth = getDaysInMonth(lastMonth, currentYear);
      days = daysInLastMonth - (birthDetails.date - currentDate);
    }

    return { years, months, days };
  };

  const getDaysInMonth = (month, year) => {
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    return isLeapYear
      ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]
      : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
  };

  const inputDate = "2021-05-17";
  const { years, months, days } = calculateAge(inputDate);

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="Akash profile 2" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
              {years} Years, {months} Months, {days} Days<br /> As React Developer
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                BE CSE from Chandigarh University
              </small>
            </article>
          </div>
          <p>
          I have a passion for creating user-friendly and visually appealing interfaces that enhance the overall user experience. With a keen eye for design and a commitment to staying updated with the latest web development trends, I strive to deliver cutting-edge solutions that meet both technical and aesthetic requirements.
          </p>
          <p>
          My experience extends to collaborating with cross-functional teams, enabling me to effectively communicate and translate project requirements into tangible results. Whether it's building interactive web applications, ensuring seamless integration, or troubleshooting compatibility issues, I am dedicated to delivering high-quality code and solutions.
          </p>
          <p>
          In addition to my technical skills, I value continuous learning and am always eager to take on new challenges and expand my knowledge in the ever-evolving field of web development. I am committed to pushing the boundaries of what can be achieved with web technologies to create compelling digital experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
