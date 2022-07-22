import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
export default function Tabla() {
  const [localName, setlocalName] = useState("");
  const [localCity, setlocalCity] = useState("");
  const [name, setName] = useState([]);

  function handleAddButton() {
    setName([
      ...name,
      {
        name: localName,
        ciudad: localCity,
      },
    ]);
  }

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center mt-2 ">
        <div className="align-items-center mx-2">
          <div
            className="mt-3"
            style={{
              width: "500px",
              padding: "6px",
              height: "10vh",
              alignSelf: "center",
            }}
          >
            <input
              className="form-control"
              type="text"
              placeholder="Write you'r name"
              onChange={(e) => {
                setlocalName(e.target.value);
              }}
            ></input>
          </div>

          <div className="col"></div>
        </div>
        <div className="row  align-items-center">
          <div
            className=""
            style={{
              width: "500px",
              padding: "6px",
              height: "10vh",
              alignSelf: "center",
            }}
          >
            <div className="form">
              <select
                defaultValue={"DEFAULT"}
                className="form-select mt-3"
                onChange={(e) => {
                  setlocalCity(e.target.value);
                }}
                style={{
                  width: "500px",
                  padding: "1%",
                  height: "4vh",
                }}
              >
                <option value="DEFAULT" disabled>
                  Select city
                </option>
                <option value="Cali">Cali</option>
                <option value="Medellin">Medellin</option>
                <option value="Bogota">Bogota</option>
              </select>
            </div>
          </div>
          <div
            className="col"
            style={{
              width: "80px",
              padding: "6px",
              height: "9vh",
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              style={{
                width: "80px",
                padding: "6px",
                height: "5vh",
                alignSelf: "center",
              }}
              onClick={() => {
                handleAddButton();
              }}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {name.map((item, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.ciudad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
