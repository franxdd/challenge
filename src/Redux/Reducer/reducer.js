import { LISTA, POST } from "../Actions/action";

const initialState = {
  personas: [],
};
const rootRouter = (state = initialState, action) => {
  switch (action.type) {
    case LISTA:
        console.log(action.payload);
      return {
        ...state,
        personas: action.payload,
      };
      case POST:
        return{
            ...state,
            personas:action.payload
        }
    default:
      return {
        ...state,
      };
  }
};
export default rootRouter;
