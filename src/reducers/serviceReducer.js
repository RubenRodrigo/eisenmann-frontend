import { types } from "../types/types"

const initialState = {
	client: 'Rodrigo',
	plaque: 'FVF-XA8',
	price: '781812',
	initDate: new Date(),
	endDate: new Date(),
	state: true
}

export const serviceReducer = (state = initialState, action) => {
	console.log(state);
	switch (action.type) {

		case types.serviceAddNew:
			return state

		default:
			return state

	}
}