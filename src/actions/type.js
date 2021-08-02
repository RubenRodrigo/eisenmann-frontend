import { types } from "../types/types";

export const typeSetData = (data) => ({
	type: types.typeSetData,
	payload: data
})

export const typeClearData = () => ({
	type: types.typeClearData,
})

