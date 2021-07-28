import { combineReducers } from "redux";
import { serviceActive, serviceCreated, serviceDeleted, serviceList } from "./serviceReducer";

// COMBINED REDUCERS
const reducers = {
	serviceList: serviceList,
	serviceActive: serviceActive,
	serviceCreated: serviceCreated,
	serviceDeleted: serviceDeleted,
}

export default combineReducers(reducers)

