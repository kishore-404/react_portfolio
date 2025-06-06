import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// React + Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { RiArrowRightLine, } from "react-icons/ri";
// Image imports
import Project1 from "../assets/images/project1.jpg";
import Project2 from "../assets/images/project3.jpg";
import Project3 from "../assets/images/codeship.png";
import Project4 from "../assets/images/pet.png";
const projects = [
    {
        img: Project1,
        subtitle: "A Modern Video Streaming Layout",
        title: "Youtube-Clone",
        link: "https://youtube-clone-kishore.netlify.app/",
    },
    {
        img: Project2,
        subtitle: "Education ladnding page",
        title: "Edu Home Connect",
        link: "https://eduhomeconnect.netlify.app/",
    },
    {
        img: Project3,
        subtitle: "A Full-Fledged Website for CodeShip",
        title: "Codeship",
        link: "https://icodeship.vercel.app/",
    },
    {
        img: Project4,
        subtitle: "The Full-Service Pet Veterinary Website",
        title: "Twisty Tails",
        link: "https://eduhomeconnect.netlify.app/",
    },
];
const Projects = () => {
    return (_jsx("section", { id: "projects", className: "projects-section ", children: _jsxs("div", { className: "projects-wrapper", children: [_jsx("h2", { className: "projects-title", children: "Projects" }), _jsx("span", { className: "projects-subtitle", children: "My personal projects" }), _jsx("div", { className: "projects-swiper-container", children: _jsxs(Swiper, { modules: [Navigation, Pagination], slidesPerView: 1, loop: true, navigation: {
                            nextEl: ".custom-swiper-button-next",
                            prevEl: ".custom-swiper-button-prev",
                        }, pagination: { clickable: true, el: ".custom-swiper-pagination" }, breakpoints: {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }, className: "projects-swiper", children: [projects.map((project, index) => (_jsx(SwiperSlide, { className: "project-slide", children: _jsxs("a", { href: project.link, target: "_blank", rel: "noreferrer", className: "project-slide-link", children: [_jsx("img", { src: project.img, alt: "project preview", className: "project-image" }), _jsxs("div", { className: "project-info", children: [_jsx("span", { className: "project-sub", children: project.subtitle }), _jsx("h3", { className: "project-heading", children: project.title }), _jsxs("div", { className: "project-link", children: ["Check it out ", _jsx(RiArrowRightLine, {})] })] })] }) }, index))), _jsx("div", { className: "custom-swiper-pagination" })] }) })] }) }));
};
export default Projects;
