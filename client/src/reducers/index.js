import { combineReducers } from "redux";
import products from "./productReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  products,
  user
});

export default rootReducer;
