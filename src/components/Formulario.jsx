import { useState } from "react";

const Formulario = ({ onFormSubmit }) => {
  // Estados del formulario
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
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="text"
            name="contra1"
            className="form-control"
            onChange={(e) => setContra1(e.target.value)}
            value={contra1}
          />
        </div>

        <div className="form-group">
          <label>Confirma tu contraseña</label>
          <input
            type="text"
            name="contra2"
            className="form-control"
            onChange={(e) => setContra2(e.target.value)}
            value={contra2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};
export default Formulario;
