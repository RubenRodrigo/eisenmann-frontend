import { types } from "../types/types"

export const employeeList = (state = { employees: [] }, action) => {

	switch (action.type) {

		case types.employeeSetData:
			return {
				...state,
				employees: [...action.payload]
			}

		case types.employeeClearData:
			return { employees: [] }

		default:
			return state

	}
}