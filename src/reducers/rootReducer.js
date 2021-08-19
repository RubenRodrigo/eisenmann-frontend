import { combineReducers } from "redux";
import { clientList } from "./clientReducer";
import { employeeList } from "./employeeReducer";
import { productActive, productList } from "./productReducer";
import { productStockActive, productStockList } from "./productStockReducer";
import { serviceActive, serviceCreated, serviceDeleted, serviceList, serviceUpdated } from "./serviceReducer";
import { typeList } from "./typeReducer";
import { unitList } from "./unitReducer";
import { uiCalendarReducer, uiProductStockModalReducer } from "./uiReducer";

// COMBINED REDUCERS
const reducers = {
	serviceList: serviceList,
	serviceActive: serviceActive,
	serviceCreated: serviceCreated,
	serviceUpdated: serviceUpdated,
	serviceDeleted: serviceDeleted,

	productList: productList,
	productActive: productActive,

	productStockList: productStockList,
	productStockActive: productStockActive,

	typeList: typeList,
	unitList: unitList,

	clientList: clientList,
	employeeList: employeeList,

	uiProductStockModal: uiProductStockModalReducer,
	uiCalendar: uiCalendarReducer
}

export default combineReducers(reducers)

