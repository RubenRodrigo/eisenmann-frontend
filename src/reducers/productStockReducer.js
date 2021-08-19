import { types } from "../types/types"

export const productStockList = (state = { productStocks: [] }, action) => {

	switch (action.type) {

		case types.productStockSetData:
			return {
				...state,
				productStocks: [...action.payload]
			}

		case types.productStockAddNew:
			return {
				...state,
				productStocks: [action.payload, ...state.productStocks]
			}

		case types.productStockDeleted:
			return {
				...state,
				productStocks: state.productStocks.filter(e => e.id !== action.payload)
			}

		case types.productStockUpdated:
			return {
				...state,
				productStocks: state.productStocks.map((e) => (e.id === action.payload.id) ? action.payload : e)
			}

		case types.productStockClearData:
			return { productStocks: [] }


		default:
			return state

	}
}

export const productStockActive = (state = { productStock: [], loading: true }, action) => {

	switch (action.type) {

		case types.productStockSetActive:
			return {
				...state,
				loading: false,
				productStock: action.payload
			}

		case types.productStockClearActive:
			return { productStock: {}, loading: true }


		default:
			return state

	}
}
