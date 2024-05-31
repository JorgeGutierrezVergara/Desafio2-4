import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
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
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Crea una cuenta</Card.Title>
        {/* SocialButton */}
        <SocialButton icon={faFacebook} />
        <SocialButton icon={faLinkedin} />
        <SocialButton icon={faGithub} />
        <p> O usa un email para registrarte </p>
        {/* Formulario */}
        <Formulario onFormSubmit={handleFormSubmit} />
        {/* ALERT */}
        {alertState ? <Alert type={alertState} /> : null}
      </Card.Body>
    </Card>
  );
}

export default Registro;
