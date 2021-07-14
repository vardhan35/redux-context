import { BUY_CAKE } from "./CakeTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
