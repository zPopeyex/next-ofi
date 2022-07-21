import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <h1>Home page</h1>
      </div>
    </>
  );
}
