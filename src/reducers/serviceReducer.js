import { types } from "../types/types"


export const serviceList = (state = { services: [] }, action) => {

	switch (action.type) {

		case types.serviceSetData:
			return {
				...state,
				services: [...action.payload]
			}

		case types.serviceClearData:
			return { services: [] }


		default:
			return state

	}
}

export const serviceActive = (state = { service: {}, loading: true }, action) => {

	switch (action.type) {

		case types.serviceSetActive:
			return {
				...state,
				loading: false,
				service: action.payload
			}

		case types.serviceClearActive:
			return { service: {}, loading: true }

		case types.serviceAddProduct:
			return {
				...state,
				service: {
					...state.service,
					service_products: [...state.service.service_products, action.payload]
				}
			}

		case types.serviceUpdateProduct:
			return {
				...state,
				service: {
					...state.service,
					service_products: state.service.service_products.map((e) => (e.id === action.payload.id) ? action.payload : e)
				}
			}

		case types.serviceDeleteProduct:
			return {
				...state,
				service: {
					...state.service,
					service_products: state.service.service_products.filter((e) => (e.id !== action.payload))
				}
			}


		default:
			return state
	}
}

export const serviceCreated = (state = { service: {}, loading: true }, action) => {

	switch (action.type) {

		case types.serviceAddNew:
			return {
				...state,
				loading: false,
				service: action.payload
			}

		default:
			return state
	}
}

export const serviceDeleted = (state = { service: {}, loading: true }, action) => {

	switch (action.type) {

		case types.serviceDeleted:
			return {
				...state,
				loading: false,
				service: action.payload
			}

		default:
			return state
	}
}