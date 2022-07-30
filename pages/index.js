import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [isPressed, setIsPressed] = useState(true);
  const [localName, setlocalName] = useState("");
  const [localLast, setlocalLast] = useState("");
  const [localCity, setlocalCity] = useState("");
  const [localState, setlocalState] = useState("");
  const [localTerms, setlocalTerms] = useState("");
  const [name, setName] = useState([]);
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    body: "",
  });

  function handleAddButton() {
    if (isPressed) {
      setName([
        ...name,
        {
          name: localName,
          lastname: localLast,
          city: localCity,
          state: localState,
          terms2: localTerms,
        },
      ]);
    } else {
      setName([
        ...name,
        {
          name: localName,
          lastname: localLast,
          city: localCity,
          state: localState,
          terms2: localTerms,
        },
      ]);
    }
  }

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments/1`
      );
      const localData = await res.json();

      setData(localData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active shadow-sm p-3 mb-5 bg-body rounded border-info"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Home
            </button>
            <button
              className="nav-link mx-2 shadow-sm p-3 mb-5 bg-body rounded border-info"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Profile
            </button>
            <button
              className="nav-link shadow shadow-sm p-3 mb-5 bg-body rounded border-info"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active "
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >
            <h1>Home a</h1>
            <button onClick={callAPI}>Llama la api</button>
            <div className="card mt-3 mb-5" style={{ width: "400px" }}>
              <div className="card-body">
                <p className="card-text">
                  <b>ID:</b> {data.id}
                  <br />
                  <b>Name:</b> {data.name}
                  <br />
                  <b>Email:</b> {data.email}
                  <br />
                  <b>Parrafo: </b>
                  {data.body}
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex="0"
          >
            <div className="spinner-border text-info m-4" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabIndex="0"
          >
            <div className="container mt-3">
              <div className="row">
                <div className="col-6 align-self-baseline bg-warning">
                  1
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Terms</th>
                      </tr>
                    </thead>
                    <tbody>
                      {name.map((item, i) => (
                        <tr key="row">
                          {i + 1}
                          <td>{item.name}</td>
                          <td>{item.lastname}</td>
                          <td>{item.city}</td>
                          <td>{item.state}</td>
                          <td>{item.terms2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-1">
                  2
                  <div
                    className="d-flex justify-content-center"
                    style={{ height: "400px" }}
                  >
                    <div className="vr"></div>
                  </div>
                </div>
                <div className="col-5 bg-primary">
                  3
                  <div className="bg-info d-flex align-items-center mt-2 mb-2 mx-2 px-2">
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-md-6 mt-4">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          placeholder="Your name"
                          required
                          onChange={(e) => {
                            setlocalName(e.target.value);
                          }}
                        ></input>
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="col-md-7">
                        <label
                          htmlFor="validationCustom02"
                          className="form-label"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          placeholder="Your Last name"
                          required
                          onChange={(e) => {
                            setlocalLast(e.target.value);
                          }}
                        ></input>
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-6">
                        <label
                          htmlFor="validationCustom03"
                          className="form-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom03"
                          placeholder="Your City"
                          required
                          onChange={(e) => {
                            setlocalCity(e.target.value);
                          }}
                        ></input>
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div className="col-md-5">
                        <label
                          htmlFor="validationCustom04"
                          className="form-label"
                        >
                          State
                        </label>
                        <select
                          className="form-select"
                          id="validationCustom04"
                          required
                          defaultValue=""
                          onChange={(e) => {
                            setlocalState(e.target.value);
                          }}
                        >
                          <option disabled value="">
                            Select
                          </option>
                          <option value="Valle del Cauca">
                            Valle del Cauca
                          </option>
                          <option value="Amazonas">Amazonas</option>
                          <option value="Nariño">Nariño</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid state.
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="invalidCheck"
                            onChange={(e) => {
                              setIsPressed(!isPressed);

                              if (isPressed == true) {
                                setlocalTerms("Acepto");
                              } else {
                                setlocalTerms("Rechazo");
                              }

                              console.log(isPressed);
                            }}
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="invalidCheck"
                          >
                            Agree to terms and conditions
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3 mb-3">
                        <button
                          className="btn btn-outline-primary text-dark"
                          type="button"
                          required
                          onClick={() => {
                            handleAddButton();
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
