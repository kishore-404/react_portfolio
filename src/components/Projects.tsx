// React + Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import {
  RiArrowRightLine,
} from "react-icons/ri";

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
  // {
  //   img: Project2,
  //   subtitle: "Education ladnding page",
  //   title: "Edu Home Connect",
  //   link: "https://eduhomeconnect.netlify.app/",
  // },
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
  return (
    <section id="projects" className="projects-section ">
      <div className="projects-wrapper">
        <h2 className="projects-title">Projects</h2>
        <span className="projects-subtitle">My personal projects</span>

        <div className="projects-swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            breakpoints={{
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
            }}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="project-slide">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-slide-link"
                >
                  <img
                    src={project.img}
                    alt="project preview"
                    className="project-image"
                  />
                  <div className="project-info">
                    <span className="project-sub">{project.subtitle}</span>
                    <h3 className="project-heading">{project.title}</h3>
                    <div className="project-link">
                      Check it out <RiArrowRightLine />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}

            {/* Swiper Pagination */}
            <div className="custom-swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
