import { RiBracesLine } from 'react-icons/ri';
import React from "react";
import { RiGlobalLine, RiCodeSSlashLine } from "react-icons/ri";
// Importing images
import HTML from '../assets/images/HTML.png';
import BS from '../assets/images/BS.png';
import tailwindCSS from '../assets/images/tailwindCSS.png';
import JS from '../assets/images/JS.png';
import Reactimg from '../assets/images/react.png';
import DB from '../assets/images/database.png';
import Python from '../assets/images/python.png';
import DSA from '../assets/images/connection.png';

import Figma from '../assets/images/figma.png';
import java from '../assets/images/java.png';
import solve from '../assets/images/solve.png';
import git from '../assets/images/git-icon.svg';
const SkillsSection = () => {
  // Skill data
  const devSkills = [
    { name: 'HTML', img: HTML },
    { name: 'Bootstrap', img: BS },
    { name: 'Tailwind CSS', img: tailwindCSS },
    { name: 'Javascript', img: JS },
    { name: 'React.js', img: Reactimg },
    { name: 'Figma', img: Figma },
  ];

  const fundamentals = [
    { name: 'Python', img: Python },
    { name: 'Java', img: java },
    { name: 'DSA', img: DSA },
    { name: 'DataBase', img: DB },
    { name: 'GIT', img: git },
    {name: ["Problem", "Solving"], img: solve },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My top skills</span>

      <div className="skills__container container grid section__border">
        {/* SKILLS 1 */}
        <div className="skills__content">
          <h3 className="skills__title">
  <RiGlobalLine /> Web Development
</h3>
          <div className="skills__info">
            {devSkills.map((skill, index) => (
              <div className="skills__data" key={index}>
                <div className="skills__blob">
                  <img src={skill.img} alt={`${skill.name} icon`} />
                </div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS 2 */}
        <div className="skills__content">
          <h3 className="skills__title">
  <RiCodeSSlashLine /> Programming Languages
</h3>
          <div className="skills__info">
           {fundamentals.map((skill, index) => (
  <div className="skills__data" key={index}>
    <div className="skills__blob">
      <img src={skill.img} alt={`${Array.isArray(skill.name) ? skill.name.join(' ') : skill.name} icon`} />
    </div>
    <h3 className="skills__name">
      {(Array.isArray(skill.name) ? skill.name : skill.name.split(' ')).map((part, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {part}
        </React.Fragment>
      ))}
    </h3>
  </div>
))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
