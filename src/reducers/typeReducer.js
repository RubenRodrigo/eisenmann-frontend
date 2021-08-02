import { types } from "../types/types"

export const typeList = (state = { types: [] }, action) => {

	switch (action.type) {

		case types.typeSetData:
			return {
				...state,
				types: [...action.payload]
			}

		case types.typeClearData:
			return { types: [] }


		default:
			return state

	}
}