import React, { useState } from "react";
import "../styling/home.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import instaCloneImage from "../images/clone_2.png";
import authorBook from "../images/author_book.png";
import easybank from "../images/easybank.png";
import multiStepForm from "../images/multi-step form .png";
import freeCodeCamp from "../svg/freeCodeCampIcon.svg";

const Home = () => {
  const [hide, setHide] = useState(0);

  return (
    <div id="home-container">
      <div id="home-content">
        <div id="home-links-container">
          <h1 id="name-title" onClick={() => setHide(0)}>
            Omar Quinones
          </h1>
          <ul id="home-links">
            <li>
              <a href="https://www.freecodecamp.org/certification/oquinone/front-end-development-libraries">
                <img
                  className="free-code-camp-icon"
                  src={freeCodeCamp}
                  alt="free code camp"
                />
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/certification/oquinone/responsive-web-design">
                <img
                  className="free-code-camp-icon"
                  src={freeCodeCamp}
                  alt="free code camp"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/oquinone?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon style={{ color: "#fff" }} />
              </a>
            </li>
            <li
              onClick={() =>
                (window.location = "mailto:omarquinones977@gmail.com")
              }
            >
              <EmailIcon id="email-icon" />
            </li>
          </ul>
        </div>
        <div id="welcome-info">
          <div id="welcome-container" className={hide === 0 ? "" : "hide"}>
            <h1 id="welcome-text">Welcome.</h1>
            <p id="welcome-paragraph">
              My name is Omar Quinones, and I have been working as a front-end
              developer for a few years now.
              <br />
              Currently, I am eager to expand my expertise into full-stack
              development. I have experience creating full-stack projects using
              React and Spring Boot.
            </p>
          </div>

          <section className={`projects-container ${hide === 1 ? "" : "hide"}`}>
            <h1 className="project-text">Image Upload</h1>
            <div className="project-content">
              <div>
                <a
                  href="https://oquinone.github.io/instagram_clone/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={instaCloneImage}
                    alt="project_image"
                    className="project-img"
                  />
                </a>
              </div>
              <div>
                <p className="project-description">
                  My goal for this project was to create a Full Stack
                  application.
                  <br />
                  The project's functionality includes user sign-up and login
                  features. A user is authenticated using a JSON Web Token. Once
                  authenticated, the user is directed to a profile page designed
                  to resemble Instagram's profile interface. On this profile
                  page, users can upload images to their profile. Additionally,
                  users can update their bio and change their profile picture.
                  <br />
                  <br />
                  <p>
                    Tech Used: React, CSS, Sass, React-Bootstrap, Spring Boot
                  </p>
                </p>
              </div>
            </div>
          </section>

          <section className={`projects-container ${hide === 2 ? "" : "hide"}`}>
            <h1 className="project-text">Author Management</h1>
            <div className="project-content">
              <div>
                <a
                  href="https://oquinone.github.io/authorManagement/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={authorBook}
                    alt="project_image"
                    className="project-img"
                  />
                </a>
              </div>
              <p className="project-description">
                The goal for this project was create a system to manage authors
                and their books. The manager can add, update, and delete authors
                and their associated books. The frontend is created using React
                and styled with Material UI. The backend is created using Spring
                Boot.
                <br />
                <br />
                <p>Tech Used: React, CSS, Sass, Material UI, Spring Boot</p>
              </p>
            </div>
          </section>

          <section className={`projects-container ${hide === 3 ? "" : "hide"}`}>
            <h1 className="project-text">Easybank</h1>
            <div className="project-content">
              <div>
                <a
                  href="https://oquinone.github.io/easybank/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={easybank}
                    alt="project_image"
                    className="project-img"
                  />
                </a>
              </div>
              <p className="project-description">
                The goal of this project was to create a responsive landing
                page. The responsiveness is achieved using breakpoint mixins
                from Sass, ensuring the site adjusts seamlessly for phone,
                tablet, and large monitor screens
                <br />
                <br />
                <p>Tech used: React, CSS, Sass, React-Bootstrap</p>
              </p>
            </div>
          </section>

          <section className={`projects-container ${hide === 4 ? "" : "hide"}`}>
            <h1 className="project-text">Mulit-Step Form</h1>
            <div className="project-content">
              <div>
                <a
                  href="https://oquinone.github.io/multi-step-form/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={multiStepForm}
                    alt="multi-step form"
                    className="project-img"
                  />
                </a>
              </div>
              <p className="project-description">
                The aim for this project was to implement a responsive
                multi-step form for an online gaming service. The primary
                objectives were to maintain the state of each form item as the
                user progresed thorugh the form and to ensure the form dispalyed
                perfectly on any screen size.
                <br />
                <br />
                <p>Tech used: React, Sass, Zustand</p>
              </p>
            </div>
          </section>

          <div id="home-projects">
            <h1 id="project-text">Projects</h1>
            <ul id="project-items">
              <li className="project-names">
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setHide(4)}
                  className="project-names-button"
                >
                  Multi-Step Form
                </Button>
              </li>
              <li className="project-names">
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setHide(2)}
                  className="project-names-button"
                >
                  Author Management
                </Button>
              </li>
              <li className="project-names">
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setHide(1)}
                  className="project-names-button"
                >
                  Image Upload
                </Button>
              </li>
              <li className="project-names">
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setHide(3)}
                  className="project-names-button"
                >
                  EasyBank
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
