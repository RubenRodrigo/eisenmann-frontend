import { combineReducers } from "redux";
import { productActive, productCreated, productList } from "./productReducer";
import { serviceActive, serviceCreated, serviceDeleted, serviceList } from "./serviceReducer";
import { typeList } from "./typeReducer";
import { unitList } from "./unitReducer";

// COMBINED REDUCERS
const reducers = {
	serviceList: serviceList,
	serviceActive: serviceActive,
	serviceCreated: serviceCreated,
	serviceDeleted: serviceDeleted,

	productList: productList,
	productActive: productActive,
	productCreated: productCreated,

	typeList: typeList,
	unitList: unitList,

}

export default combineReducers(reducers)

