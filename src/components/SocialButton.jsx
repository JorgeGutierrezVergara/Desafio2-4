import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Tags = ({ icon }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={icon}
        style={{
          height: "25px",
          border: "1px solid black",
          borderRadius: "50%",
          padding: "12px",
          margin: "8px",
        }}
      />
    </>
  );
};

export default Tags;
