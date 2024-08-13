import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import freeCodeCamp from "../svg/freeCodeCampIcon.svg";

const NavbarComponent = (props) => {
  const { setHide } = props;
  return (
    <section id="navbar-container">
      <h1 id="name-title" onClick={() => setHide(0)}>
        Omar Quinones
      </h1>
      <ul id="home-links">
        <li>
          <a
            href="https://www.freecodecamp.org/certification/oquinone/front-end-development-libraries"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="free-code-camp-icon"
              src={freeCodeCamp}
              alt="free code camp"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/oquinone/responsive-web-design"
            target="_blank"
            rel="noreferrer"
          >
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
          onClick={() => (window.location = "mailto:omarquinones977@gmail.com")}
        >
          <EmailIcon id="email-icon" />
        </li>
      </ul>
    </section>
  );
};

export default NavbarComponent;
