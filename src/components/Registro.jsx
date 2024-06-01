import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import "../assets/style.css";
import { useState } from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Registro() {
  const [alertState, setAlertState] = useState("");

  const handleFormSubmit = (form) => {
    if (form.error === "contra_error") {
      setAlertState("contra_error");
    } else if (form.error) {
      setAlertState("error");
    } else if (!form.error) {
      setAlertState("exito");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "24rem" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "33px" }}>Crea una cuenta</Card.Title>
          {/* SocialButton */}
          <SocialButton icon={faFacebook} />
          <SocialButton icon={faLinkedin} />
          <SocialButton icon={faGithub} />
          <p style={{ marginBottom: "5px" }}>
            {" "}
            O usa tu email para registrarte{" "}
          </p>
          {/* Formulario */}
          <Formulario onFormSubmit={handleFormSubmit} />
          {/* ALERT */}
          {alertState ? <Alert type={alertState} /> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Registro;
