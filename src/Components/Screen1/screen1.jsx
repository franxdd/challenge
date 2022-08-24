import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { lista } from "../../Redux/Actions/action";
// const data = require("../Tabla/tabla.json");

function Screen1() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(lista());
  }, [dispatch]);
const {personas} = useSelector(state => state)
console.log(personas);
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Hobbie</th>
          <th scope="col">Carrera</th>
        </tr>
      </thead>
      <tbody>
        {personas?.map((e) => {
          return (
            <tr>
              <td>{e.nombre}</td>
              <td>{e.edad}</td>
              <td>{e.hobbie}</td>
              <td>{e.carrera}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Screen1;
