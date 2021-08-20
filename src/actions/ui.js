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

export const uiOpenClientModal = () => ({
	type: types.uiOpenClientModal,
})

export const uiCloseClientModal = () => {
	return {
		type: types.uiCloseClientModal,
	}
}

export const uiOpenEmployeeModal = () => ({
	type: types.uiOpenEmployeeModal,
})

export const uiCloseEmployeeModal = () => {
	return {
		type: types.uiCloseEmployeeModal,
	}
}