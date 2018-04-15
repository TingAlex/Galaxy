//把很多小的reducer链接成一个大的
import { combineReducers } from "redux";
import authReducer from "./authReducer";
export default combineReducers({
  auth: authReducer
});
