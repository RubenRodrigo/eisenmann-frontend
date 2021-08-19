import { types } from "../types/types";

export const clientSetData = (clients) => ({
	type: types.clientSetData,
	payload: clients
})

export const clientClearData = () => ({
	type: types.clientClearData,
})

