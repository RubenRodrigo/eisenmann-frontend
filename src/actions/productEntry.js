// PRODUCT IS PRODUCT STOCK
import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { productStockStartLoad } from "./productStock";

// Service Product
export const productStockStartAddEntry = (entry) => {
	return async (dispatch) => {

		try {

			const resp = await fetchSinToken(`product/product_entry/`, entry, 'POST');
			const data = await resp.json();
			dispatch(productStockStartLoad(data.product))

		} catch (error) {
			console.log(error);
		}
	}
}

// Service Product
export const productStockTableStartAddEntry = (entry) => {
	return async (dispatch) => {

		try {

			const resp = await fetchSinToken(`product/product_entry/`, entry, 'POST');
			const data = await resp.json();
			dispatch(productStockStartLoad(data.product, "TABLE"))

		} catch (error) {
			console.log(error);
		}
	}
}



// Delete a product entry and update current product
export const productStockStartDeleteEntry = (id, entry_id) => {
	return async (dispatch) => {
		try {
			Swal.fire({
				title: '¿Estas seguro?',
				text: 'Se eliminara esta entrada del producto actual',
				icon: 'warning',
				showCancelButton: true,
			}).then(async (result) => {

				if (result.isConfirmed) {
					const resp = await fetchSinToken(`product/product_entry/${entry_id}`, '', 'DELETE');
					if (resp.ok) {
						dispatch(productStockStartLoad(id))
						Swal.fire(
							'Eliminado!',
							'Se ha eliminado con exito.',
							'success'
						)
					} else {
						Swal.fire('Error', 'Algo salio mal, vuelva a intentar.', 'error')
					}
				}

			})

		} catch (error) {
			Swal.fire('Error', 'Algo salio mal, vuelva a intentar.', 'error')
			console.log(error);
		}

	}
}

