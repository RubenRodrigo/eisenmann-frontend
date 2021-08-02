import { types } from "../types/types";

export const unitSetData = (units) => ({
	type: types.unitSetData,
	payload: units
})

export const unitClearData = () => ({
	type: types.unitClearData,
})

