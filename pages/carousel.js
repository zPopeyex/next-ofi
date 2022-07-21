import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
export default function Carrousel() {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <h1>Carousel</h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div
            className="carousel-inner container-fluid "
            style={{ width: "100vh", height: "400px" }}
          >
            <div className="carousel-item active">
              <img
                src="https://cdn.discordapp.com/attachments/949024081523650560/974432666780835870/Pendiente.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.discordapp.com/attachments/949024081523650560/976992801264902174/Banner_Pagos.jpg"
                className="d-flex w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.discordapp.com/attachments/949024081523650560/985200928242171994/Banner_Solicita_Credito.jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
