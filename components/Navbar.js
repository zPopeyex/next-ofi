import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <h5 className="text-dark h4">Categorias</h5>
            <div className="container">
              <Link href="/">inicio</Link>
              <hr />
              <Link href="/carousel">Carousel</Link>
              <hr />
              <Link href="/tabla">Tabla</Link>
            </div>
            <hr />
            <span className="text-muted">Opciones disponibles</span>
          </div>
        </div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
