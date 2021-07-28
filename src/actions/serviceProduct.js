import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

// Service Product
export const serviceStartAddProduct = (product) => {
	return async (dispatch) => {

		try {
			const resp = await fetchSinToken(`service/service_product/`, product, 'POST');
			const body = await resp.json();

			dispatch(serviceAddProduct(body))
		} catch (error) {
			console.log(error);
		}
	}
}

export const serviceStartUpdateProduct = (product) => {
	return async (dispatch) => {

		try {

			const resp = await fetchSinToken(`service/service_product/${product.id}/`, product, 'PUT');
			const body = await resp.json();

			dispatch(serviceUpdateProduct(body))
		} catch (error) {
			console.log(error)
		}
	}
}

export const serviceStartDeleteProduct = (id) => {
	return async (dispatch) => {
		try {
			await fetchSinToken(`service/service_product/${id}`, '', 'DELETE');

			dispatch(serviceDeleteProduct(id))
		} catch (error) {
			console.log(error);
		}

	}
}

export const serviceAddProduct = (product) => ({
	type: types.serviceAddProduct,
	payload: product
});

export const serviceUpdateProduct = (product) => ({
	type: types.serviceUpdateProduct,
	payload: product
});

export const serviceDeleteProduct = (id) => ({
	type: types.serviceDeleteProduct,
	payload: id
});