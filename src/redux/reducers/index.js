import { combineReducers } from "redux";
import userReducer from "./user";
import websitesReducer from "./websites";

const rootReducer = combineReducers({
  user: userReducer,
  websites: websitesReducer,
});

export default rootReducer;
