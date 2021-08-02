import { types } from "../types/types"

export const productList = (state = { products: [] }, action) => {

	switch (action.type) {

		case types.productSetData:
			return {
				...state,
				products: [...action.payload]
			}

		case types.productDeleted:
			return {
				...state,
				products: state.products.filter(e => e.id !== action.payload)
			}

		case types.productClearData:
			return { products: [] }


		default:
			return state

	}
}

export const productActive = (state = { product: [], loading: true }, action) => {

	switch (action.type) {

		case types.productSetActive:
			return {
				...state,
				loading: false,
				product: action.payload
			}

		case types.productClearActive:
			return { product: {}, loading: true }

		default:
			return state

	}
}

export const productCreated = (state = { product: {}, loading: true }, action) => {

	switch (action.type) {

		case types.productAddNew:
			return {
				...state,
				loading: false,
				product: action.payload
			}

		default:
			return state
	}
}