import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { productStartLoad } from "./product";

// Service Product
export const productStartAddEntry = (entry) => {
	return async (dispatch) => {

		try {

			const resp = await fetchSinToken(`product/sub_product/`, entry, 'POST');
			const { product } = await resp.json();

			dispatch(productStartLoad(product))

		} catch (error) {
			console.log(error);
		}
	}
}

export const productStartDeleteEntry = (id, entry_id) => {
	return async (dispatch) => {
		try {
			const resp = await fetchSinToken(`product/sub_product/${entry_id}`, '', 'DELETE');

			if (resp.ok) {
				dispatch(productStartLoad(id))
			}
		} catch (error) {
			console.log(error);
		}

	}
}

const productAddEntry = (entry) => ({
	type: types.productAddEntry,
	payload: entry
});
