import { combineReducers } from "redux";
import { productActive, productList } from "./productReducer";
import { productStockActive, productStockList } from "./productStockReducer";
import { serviceActive, serviceCreated, serviceDeleted, serviceList } from "./serviceReducer";
import { typeList } from "./typeReducer";
import { uiCalendarReducer, uiProductStockModalReducer } from "./uiReducer";
import { unitList } from "./unitReducer";

// COMBINED REDUCERS
const reducers = {
	serviceList: serviceList,
	serviceActive: serviceActive,
	serviceCreated: serviceCreated,
	serviceDeleted: serviceDeleted,

	productList: productList,
	productActive: productActive,

	productStockList: productStockList,
	productStockActive: productStockActive,

	typeList: typeList,
	unitList: unitList,

	uiProductStockModal: uiProductStockModalReducer,
	uiCalendar: uiCalendarReducer
}

export default combineReducers(reducers)

