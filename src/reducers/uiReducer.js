import { types } from "../types/types";


export const uiProductStockModalReducer = (state = { modalOpen: false }, action) => {
	switch (action.type) {
		case types.uiOpenProductStockModal:
			return {
				...state,
				modalOpen: true
			}
		case types.uiCloseProductStockModal:
			return {
				...state,
				modalOpen: false
			}
		default:
			return state;
	}
}

export const uiCalendarReducer = (state = { open: false }, action) => {
	switch (action.type) {
		case types.uiOpenCalendar:
			return {
				...state,
				open: true
			}
		case types.uiCloseCalendar:
			return {
				...state,
				open: false
			}
		default:
			return state;
	}
}