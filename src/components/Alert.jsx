import "bootstrap/dist/css/bootstrap.min.css";

function Alert({ type }) {
  return (
    <>
      {type === "contra_error" && (
        <h3 className="contra_error">Las contraseñas son distintas.</h3>
      )}
      {type === "exito" && <h3 className="exito">Sesión creada con éxito!</h3>}
      {type === "error" && (
        <h3 className="fallo">Debes rellenar todos los campos</h3>
      )}
    </>
  );
}
export default Alert;
