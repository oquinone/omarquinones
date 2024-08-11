import React, { useState } from "react";
import NavbarComponent from "./navbar";
import ProjectsComponent from "./projects";
import ProjectButtonsComponent from "./projectButtons";
import "../styling/home.scss";

const Home = () => {
  const [hide, setHide] = useState(0);

  return (
    <div id="home-container">
      <div id="home-content">
        <NavbarComponent setHide={setHide} />
        <div id="welcome-info">
          <ProjectsComponent hide={hide} />
          <ProjectButtonsComponent setHide={setHide} />
        </div>
      </div>
    </div>
  );
};

export default Home;
