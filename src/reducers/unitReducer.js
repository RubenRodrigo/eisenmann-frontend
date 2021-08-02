import { types } from "../types/types"

export const unitList = (state = { units: [] }, action) => {

	switch (action.type) {

		case types.unitSetData:
			return {
				...state,
				units: [...action.payload]
			}

		case types.unitClearData:
			return { units: [] }


		default:
			return state

	}
}