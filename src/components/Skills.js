import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaKey,
  FaServer,
} from "react-icons/fa";
import { Badge } from "reactstrap";

function Skills() {
  const frontendSkills = [
    {
      icon: (
        <FaReact
          style={{ fontSize: "50px", color: "blue", marginBottom: "10px" }}
        />
      ),
      title: "React",
      description: "Building dynamic and responsive UI with React.",
    },
    {
      icon: (
        <FaHtml5
          style={{ fontSize: "50px", color: "orange", marginBottom: "10px" }}
        />
      ),
      title: "HTML5",
      description: "Structuring modern web pages with HTML5.",
    },
    {
      icon: (
        <FaCss3Alt
          style={{ fontSize: "50px", color: "blue", marginBottom: "10px" }}
        />
      ),
      title: "CSS3",
      description: "Styling web pages with CSS3.",
    },
    {
      icon: (
        <FaJsSquare
          style={{ fontSize: "50px", color: "#ff9900", marginBottom: "10px" }}
        />
      ),
      title: "JavaScript",
      description: "Developing web functionalities with JavaScript.",
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          alt="Figma"
          style={{ width: "50px", height: "50px", marginBottom: "10px" }}
        />
      ),
      title: "Figma",
      description: "Designing user interfaces and prototypes with Figma.",
    },
  ];

  const backendSkills = [
    {
      icon: <FaNodeJs className="skill-icon" />,
      title: "Node.js",
      description: "Server-side development using Node.js.",
    },
    {
      icon: <FaServer className="skill-icon" />,
      title: "Express.js",
      description: "Middleware-side development using Express",
    },
    {
      icon: <FaKey className="skill-icon" />,
      title: "JWT",
      description:
        "Securely handling user authentication and session management",
    },
  ];

  const databaseSkills = [
    {
      icon: <FaDatabase className="skill-icon" />,
      title: "MongoDB",
      description: "NoSQL database management with MongoDB.",
    },
    {
      icon: (
        <img
          src="https://cdn.icon-icons.com/icons2/1508/PNG/512/mysqlworkbench_103806.png"
          alt="MySQL"
          style={{ width: "50px", height: "60px", marginBottom: "10px" }}
        />
      ),
      title: "MySQL",
      description: "Relational database management system.",
    },
  ];

  const versionControlSkills = [
    {
      icon: (
        <img
          src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"
          alt="Git"
          style={{ width: "100px", height: "80px", marginBottom: "10px" }}
        />
      ),
      title: "Git",
      description: "Git For Code Version Control System",
    },
    {
      icon: (
        <img
          src="https://vdata.vn/wp-content/uploads/2023/01/kisspng-logo-cpanel-computer-software-portable-network-gra-5b77735f340a86-1.png"
          alt="C Panel"
          style={{ width: "80px", height: "70px", marginBottom: "10px" }}
        />
      ),
      title: "C Panel",
      description: "For Hosting Front End & Back End Applications",
    },
  ];

  return (
    <div>
      <section className="skills-section">
        <Badge color="success" pill>
          Frontend Technologies
        </Badge>
        {/* <h5>Frontend Technologies</h5> */}
        <div className="skills-container">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <Badge color="success" pill>
          Backend Technologies
        </Badge>
        {/* <h5>Backend Technologies</h5> */}
        <div className="skills-container">
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <Badge color="success" pill>
          Database Technologies
        </Badge>
        {/* <h5>Database Technologies</h5> */}
        <div className="skills-container">
          {databaseSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <Badge color="success" pill>
          Version Control & Hosting Platform
        </Badge>
        {/* <h5>Version Control & Hosting Platform</h5> */}
        <div className="skills-container">
          {versionControlSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
