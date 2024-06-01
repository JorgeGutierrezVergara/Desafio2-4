import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";

function Alert({ type }) {
  return (
    <>
      {type === "contra_error" && (
        <p className="card p-2 mt-2 mb-2" id="card_error">
          Las contraseñas son distintas.
        </p>
      )}
      {type === "exito" && (
        <p className="card p-2 mt-2 mb-2" id="card_exito">
          Sesión creada con éxito!
        </p>
      )}
      {type === "error" && (
        <p className="card p-2 mt-2 mb-2" id="card_error">
          Completa todos los campos.
        </p>
      )}
    </>
  );
}
export default Alert;
