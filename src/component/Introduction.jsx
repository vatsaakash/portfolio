import "../component/intro.css";

const Introduction = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="i-intro">Hey, there My name is</h2>
          <h1 className="i-name">Akash Ranjan </h1>
          <div className="intro-skill">
            <div className="intro-skill-wrapper">
              <div className="intro-skill-items">Web Develper</div>
              <div className="intro-skill-items">UI/UX</div>
              <div className="intro-skill-items">Blogger</div>
              <div className="intro-skill-items">Writer/ Content Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right"></div>
    </div>
  );
};

export default Introduction;
