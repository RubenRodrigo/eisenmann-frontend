import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

/* Async functions */

// Service
export const serviceStartLoadingData = () => {
	return async (dispatch) => {

		try {

			const resp = await fetchSinToken('service');
			const body = await resp.json();

			dispatch(serviceSetData(body))

		} catch (error) {
			console.log(error);
		}

	}
}

export const serviceStartAddNew = (service, router) => {
	return async (dispatch) => {
		try {

			const resp = await fetchSinToken('service/', service, 'POST');
			const body = await resp.json();
			dispatch(serviceAddNew(body))
			router.push('/services')

		} catch (error) {
			console.log(error);
		}
	}
}

export const serviceStartUpdate = (service, router) => {
	return async (dispatch) => {

		try {
			const resp = await fetchSinToken(`service/${service.id}/`, service, 'PUT');
			const body = await resp.json();

			dispatch(serviceAddNew(body))
			router.push('/services')

		} catch (error) {
			console.log(error)
		}

	}
}

export const serviceStartDelete = (id, router) => {
	return async (dispatch, getState) => {
		const { service } = getState().serviceActive
		try {

			await fetchSinToken(`service/${id}/`, '', 'DELETE');
			router.push('/services')
			dispatch(serviceDeleted(service))
			dispatch(serviceClearActive())

		} catch (error) {
			console.log(error);
		}
	}
}

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

/* Action functions */
export const serviceSetData = (services) => ({
	type: types.serviceSetData,
	payload: services
})

export const serviceClearData = () => ({
	type: types.serviceClearData,
});

export const serviceDeleted = (service) => ({
	type: types.serviceDeleted,
	payload: service
});

export const serviceSetActive = (service) => ({
	type: types.serviceSetActive,
	payload: { ...service }
});

export const serviceClearActive = () => ({
	type: types.serviceClearActive,
});

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

export const serviceAddNew = (service) => ({
	type: types.serviceAddNew,
	payload: service
})