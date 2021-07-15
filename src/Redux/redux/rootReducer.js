import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import CreamReducer from "./IceCream/CreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cream: CreamReducer,
  user: userReducer,
});

export default rootReducer;
