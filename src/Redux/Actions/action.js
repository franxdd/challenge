import axios from "axios";
import data from "../../Components/Tabla/tabla.json";
export const LISTA = "LISTA";
export const POST = "POST";
console.log(data);
export const lista = () => {
  // console.log(payload)
  return async function (dispatch) {
    try {
      return dispatch({
        type: LISTA,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const post = (payload) => {
  console.log(payload);
  return async function (dispatch) {
    data.push(payload)
console.log(data);
    return dispatch({
      type: POST,
      payload: data,
    });
  };
};
