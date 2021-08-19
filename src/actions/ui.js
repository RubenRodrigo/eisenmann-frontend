import { types } from "../types/types";

export const uiOpenProductStockModal = () => ({
	type: types.uiOpenProductStockModal,
})

export const uiCloseProductStockModal = () => {
	return {
		type: types.uiCloseProductStockModal,
	}
}

export const uiOpenCalendar = () => ({
	type: types.uiOpenCalendar,
})

export const uiCloseCalendar = () => {
	return {
		type: types.uiCloseCalendar,
	}
}