import Button from "@mui/material/Button";

const ProjectButtonsComponent = (props) => {
  const { setHide } = props;

  return (
    <section id="home-projects">
      <h1 id="project-text">Projects</h1>
      <ul id="project-items">
        <li className="project-names">
          <Button
            variant="text"
            size="small"
            onClick={() => setHide(5)}
            className="project-names-button"
          >
            Task Management
          </Button>
        </li>
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
    </section>
  );
};

export default ProjectButtonsComponent;
