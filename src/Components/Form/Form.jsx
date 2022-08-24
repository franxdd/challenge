import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { post } from "../../Redux/Actions/action";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [input, setInput] = useState({
    nombre: "",
    edad: "",
    hobbie: "",
    carrera: "",
  });

  function handleInput(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(post(input));
    alert("Persona agregada")
    setInput({
      nombre: "",
      edad: "",
      hobbie: "",
      carrera: "",
    });
    navigate("/tabla");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Nombre..."
              name="nombre"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Edad</label>
            <input
              type="number"
              className="form-control"
              id="inputPassword4"
              placeholder="Edad..."
              name="edad"
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Hobbie</label>
          <input
            type="text"
            className="form-control"
            id="inputHobbie"
            name="hobbie"
            placeholder="Hobbie..."
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Carrera</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Profesion..."
            name="carrera"
            onChange={(e) => handleInput(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>{" "}
    </div>
  );
}

export default Form;
