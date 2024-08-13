// import React, { useState } from "react";
import NavbarComponent from "./navbar";
import ProjectsComponent from "./projects";
import ProjectButtonsComponent from "./projectButtons";
import { useHooks } from "../hooks/hooks";
import "../styling/home.scss";

const Home = () => {
  const { hide, setHide, width } = useHooks();

  return (
    <div id="home-container">
      <div id="home-content">
        <NavbarComponent setHide={setHide} />
        <div id="projects-and-buttons-container">
          <ProjectsComponent hide={hide} width={width} />
          {width <= 575 ? null : <ProjectButtonsComponent setHide={setHide} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
