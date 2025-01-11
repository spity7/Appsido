import Code from "../../../assets/images/v1/code.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
  {
    id: crypto.randomUUID(),
    title: "Fashion Brand Platform",
    description:
      "Provide a seamless shopping experience for their global customers.",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Food Delivery App",
    description:
      "A user-friendly mobile app to streamline food ordering and delivery for their customers.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "AI-Powered Chatbot",
    description:
      "HealthCare Chatbot the handles patient inquiries, appointment scheduling, and FAQs efficiently.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Services Firm",
    description:
      "FinTrust that migrates the legacy systems to the cloud to improve scalability, security, and cost-efficiency.",
    img: Project4Img,
  },
];

const swiperSettings = {
  spaceBetween: 24,
  direction: "horizontal",
  pagination: {
    clickable: true,
  },
  modules: [Pagination, Mousewheel],
  mousewheel: true,
  breakpoints: {
    640: {
      slidesPerView: 1, // 1 card on small screens
    },
    900: {
      slidesPerView: 2, // 2 cards on medium screens
    },
    1200: {
      slidesPerView: 3, // 3 cards on larger screens
    },
    1600: {
      slidesPerView: 3.5, // 3.5 cards on extra-large screens
    },
  },
};

function Projects() {
  return (
    <div className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            Have a wide range of
            <span className="aximo-title-animation">
              creative projects
              <span className="aximo-title-icon">
                <img width={70} src={Code} alt="Code" />
              </span>
            </span>
          </h2>
        </div>
      </div>
      <div className="swiper aximo-project-slider">
        <Swiper {...swiperSettings}>
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
