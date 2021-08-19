import { types } from "../types/types"

export const clientList = (state = { clients: [] }, action) => {

	switch (action.type) {

		case types.clientSetData:
			return {
				...state,
				clients: [...action.payload]
			}

		case types.clientClearData:
			return { clients: [] }

		default:
			return state

	}
}