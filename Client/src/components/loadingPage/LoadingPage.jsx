import "./LoadingPage.css";
import loader from "../../../img/LoadingGif.gif";

export function LoadingPage() {
  return (
    <main className="loadingContainer">
      <img src={loader} alt="loader" />
    </main>
  );
}
