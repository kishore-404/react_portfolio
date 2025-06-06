import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { RiBracesLine } from 'react-icons/ri';
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
        { name: ["Problem", "Solving"], img: solve },
    ];
    return (_jsxs("section", { className: "skills section", id: "skills", children: [_jsx("h2", { className: "section__title", children: "Skills" }), _jsx("span", { className: "section__subtitle", children: "My top skills" }), _jsxs("div", { className: "skills__container container grid section__border", children: [_jsxs("div", { className: "skills__content", children: [_jsxs("h3", { className: "skills__title", children: [_jsx(RiGlobalLine, {}), " Web Development"] }), _jsx("div", { className: "skills__info", children: devSkills.map((skill, index) => (_jsxs("div", { className: "skills__data", children: [_jsx("div", { className: "skills__blob", children: _jsx("img", { src: skill.img, alt: `${skill.name} icon` }) }), _jsx("h3", { className: "skills__name", children: skill.name })] }, index))) })] }), _jsxs("div", { className: "skills__content", children: [_jsxs("h3", { className: "skills__title", children: [_jsx(RiCodeSSlashLine, {}), " Programming Languages"] }), _jsx("div", { className: "skills__info", children: fundamentals.map((skill, index) => (_jsxs("div", { className: "skills__data", children: [_jsx("div", { className: "skills__blob", children: _jsx("img", { src: skill.img, alt: `${Array.isArray(skill.name) ? skill.name.join(' ') : skill.name} icon` }) }), _jsx("h3", { className: "skills__name", children: (Array.isArray(skill.name) ? skill.name : skill.name.split(' ')).map((part, i) => (_jsxs(React.Fragment, { children: [i > 0 && _jsx("br", {}), part] }, i))) })] }, index))) })] })] })] }));
};
export default SkillsSection;
