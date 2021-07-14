import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import CreamReducer from "./IceCream/CreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cream: CreamReducer,
});

export default rootReducer;
