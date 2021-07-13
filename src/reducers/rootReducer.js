import { combineReducers } from "redux";
import { serviceReducer } from "./serviceReducer";

// COMBINED REDUCERS
const reducers = {
	service: serviceReducer,
}

export default combineReducers(reducers)

