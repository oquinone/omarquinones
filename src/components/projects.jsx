import instaCloneImage from "../images/insta-image.png";
import authorBook from "../images/author-book.png";
import easybank from "../images/easybank.png";
import multiStepForm from "../images/multi-step-form.png";
import taskManagement from "../images/task-management-2.png";

const ProjectsComponent = (props) => {
  const { hide, width } = props;
  return (
    <>
      <div
        id="welcome-container"
        className={width <= 575 ? "" : hide === 0 ? "" : "hide"}
      >
        <h1 id="welcome-text">Welcome.</h1>
        <p id="welcome-paragraph">
          My name is Omar, and I am a software engineer specializing in building
          frontend applications with React and TypeScript. I am passionate about
          crafting seamless user experiences and bringing innovative web
          solutions to life.
        </p>
      </div>

      <div
        className={`projects-container ${
          width <= 575 ? "" : hide === 5 ? "" : "hide"
        }`}
      >
        <h1 className="project-title">Task Management</h1>
        <div className="project-content">
          <div>
            <a
              href="https://oquinone.github.io/task-management"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={taskManagement}
                alt="multi-step form"
                className="project-img"
              />
            </a>
          </div>
          <p className="project-description">
            Designed and developed a fullstack Jira-like task management system
            web app. Built the frontend using React and TypeScript, enabling
            users to create multiple projects. Within each project, users can
            add customizable columns to represent task statuses and create tasks
            with specific details. Implemented a drag-and-drop interface
            allowing users to move tasks between columns to update their status.
            Developed the backend in Go with efficient CRUD APIs to manage
            project data, columns, and tasks. Integrated MongoDB for data
            storage and retrieval, ensuring high performance and data
            persistence.
            <br />
            <br />
            <p>
              Tech used: React, TypeScript, Tailwind CSS, Ant Design, Zustand,
              Go, MongoDB, Vite
            </p>
          </p>
        </div>
      </div>

      <div
        className={`projects-container ${
          width <= 575 ? "" : hide === 4 ? "" : "hide"
        }`}
      >
        <h1 className="project-title">Mulit-Step Form</h1>
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
            Developed a responsive, mobile first approach, multi-step form with
            a focus on accessibility, achieving a 100% score on Google Chromes
            Lighthouse Accessibility audit by using ARIA and Semantic HTML
            <br />
            <br />
            <p>Tech used: React, Sass, Material UI, Zustand</p>
          </p>
        </div>
      </div>

      <div
        className={`projects-container ${
          width <= 575 ? "" : hide === 2 ? "" : "hide"
        }`}
      >
        <h1 className="project-title">Author Management</h1>
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
            The goal for this project was create a system to manage authors and
            their books. The manager can add, update, and delete authors and
            their associated books. The frontend is created using React and
            styled with Material UI. The backend is created using Spring Boot.
            <br />
            <br />
            <p>
              Tech Used: React, CSS, Sass, Material UI, Zustand, Spring Boot
            </p>
          </p>
        </div>
      </div>

      <div
        className={`projects-container ${
          width <= 575 ? "" : hide === 1 ? "" : "hide"
        }`}
      >
        <h1 className="project-title">Image Upload</h1>
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
              My goal for this project was to create a Full Stack application.
              <br />
              The project's functionality includes user sign-up and login
              features. A user is authenticated using a JSON Web Token. Once
              authenticated, the user is directed to a profile page designed to
              resemble Instagram's profile interface. On this profile page,
              users can upload images to their profile. Additionally, users can
              update their bio and change their profile picture.
              <br />
              <br />
              <p>
                Tech Used: React, CSS, Sass, React-Bootstrap, Zustand, Spring
                Boot
              </p>
            </p>
          </div>
        </div>
      </div>

      <div
        className={`projects-container ${
          width <= 575 ? "" : hide === 3 ? "" : "hide"
        }`}
      >
        <h1 className="project-title">Easybank</h1>
        <div className="project-content">
          <div>
            <a
              href="https://oquinone.github.io/easybank/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={easybank} alt="project_image" className="project-img" />
            </a>
          </div>
          <p className="project-description">
            The goal of this project was to create a responsive landing page.
            The responsiveness is achieved using breakpoint mixins from Sass,
            ensuring the site adjusts seamlessly for phone, tablet, and large
            monitor screens
            <br />
            <br />
            <p>Tech used: React, CSS, Sass, React-Bootstrap</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectsComponent;
