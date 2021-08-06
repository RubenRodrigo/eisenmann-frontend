import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const productStartLoadingData = () => {
	return async (dispatch) => {

		try {

			const resp = await fetchSinToken('product');
			const body = await resp.json();

			dispatch(productSetData(body))

		} catch (error) {
			console.log(error);
		}

	}
}

export const productStartLoad = (id) => {
	return async (dispatch) => {

		try {

			const resp = await fetchSinToken(`product/${id}/`);
			const body = await resp.json();

			dispatch(productSetActive(body))

		} catch (error) {
			console.log(error);
		}

	}
}

export const productStartCreate = (product, router) => {
	return async (dispatch) => {
		try {

			const resp = await fetchSinToken('product/', product, 'POST');
			const body = await resp.json();
			dispatch(productAddNew(body))
			router.push('/products')

		} catch (error) {
			console.log(error);
		}
	}
}

export const productStartUpdate = (product, router) => {
	return async (dispatch) => {

		try {
			const resp = await fetchSinToken(`product/${product.id}/`, product, 'PUT');
			const body = await resp.json();

			dispatch(productAddNew(body))
			router.push('/products')

		} catch (error) {
			console.log(error)
		}

	}
}

export const productStartDelete = (id, router) => {
	return async (dispatch, getState) => {
		// const { product } = getState().productActive
		try {

			await fetchSinToken(`product/${id}/`, '', 'DELETE');
			dispatch(productDeleted(id))

		} catch (error) {
			console.log(error);
		}
	}
}

export const productAddNew = (product) => ({
	type: types.productAddNew,
	payload: product
})

export const productSetData = (products) => ({
	type: types.productSetData,
	payload: products
})

export const productClearData = () => ({
	type: types.productClearData,
})

export const productDeleted = (id) => ({
	type: types.productDeleted,
	payload: id
})

export const productSetActive = (product) => ({
	type: types.productSetActive,
	payload: { ...product }
});

export const productClearActive = () => ({
	type: types.productClearActive,
});