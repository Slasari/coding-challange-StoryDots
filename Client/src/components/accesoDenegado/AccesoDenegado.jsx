import "./AccesoDenegado.css";
import denied from "../../../img/acceso_denegado.jpg";

export function AccesoDenegado() {
  return (
    <main className="accesoDContainer">
      <img src={denied} alt="loader" />
    </main>
  );
}
