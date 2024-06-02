import { useState } from "react";
import "../assets/style.css";

const Formulario = ({ onFormSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contra1, setContra1] = useState("");
  const [contra2, setContra2] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    // Validación
    if (nombre === "" || email === "" || contra1 === "" || contra2 === "") {
      setError(true);
      onFormSubmit({ error: true });
      return;
    }

    if (contra1 != contra2) {
      setError(true);
      onFormSubmit({ error: "contra_error" });
      return;
    }

    setError(false);
    onFormSubmit({ error: false });

    setNombre("");
    setEmail("");
    setContra1("");
    setContra2("");
  };

  return (
    <>
      <form
        className="formulario"
        onSubmit={validarDatos}
        style={{
          borderRadius: "30%",
          border: "1px solid black !important",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            value={nombre}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="tuemail@example.com"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="contra1"
            className="form-control"
            onChange={(e) => setContra1(e.target.value)}
            value={contra1}
            placeholder="Contraseña"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="contra2"
            className="form-control"
            onChange={(e) => setContra2(e.target.value)}
            value={contra2}
            placeholder="Confirma tu contraseña"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Registrarse
        </button>
      </form>
    </>
  );
};
export default Formulario;
