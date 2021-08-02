import React, { useState } from 'react'

import { PencilAltIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { serviceStartAddProduct, serviceStartDeleteProduct, serviceStartUpdateProduct } from '../../../actions/service'
import { ServiceProductModal } from '../serviceForm/ServiceProductModal'
import { productStartLoadingData } from '../../../actions/product'

export const TableServiceProducts = () => {

	const dispatch = useDispatch()
	const { service } = useSelector(state => state.serviceActive)

	const {
		id,
		service_products,
	} = { ...service }

	const initialState = {
		product: 0,
		description: 'Pintura roja para la puerta',
		quantity: '15',
	}

	const [open, setOpen] = useState(false)
	const [formValues, setFormValues] = useState(initialState)

	const handleAddProduct = () => {
		setFormValues(initialState)
		setOpen(true)
	}

	const handleEditProduct = (ser_product) => {
		setFormValues(ser_product)
		setOpen(true)
	}

	const handleDeleteProduct = (serviceProductId) => {
		dispatch(serviceStartDeleteProduct(serviceProductId))
	}

	const handleSubmitForm = (data) => {
		data.service = id
		if (formValues.id) {
			data.id = formValues.id
			dispatch(serviceStartUpdateProduct(data))
		} else {
			dispatch(serviceStartAddProduct(data))
		}
		setOpen(false)
		dispatch(productStartLoadingData())
	}


	return (
		<div className="shadow-md p-4">
			<ServiceProductModal
				open={open}
				setOpen={setOpen}
				initialValues={formValues}
				handleSubmitForm={handleSubmitForm}
			/>
			<div>
				<div className="flex justify-between">
					<div>
						<h1 className="text-3xl	font-semibold">Lista de Subservicios y Productos</h1>
					</div>
					<div>
						<button
							onClick={handleAddProduct}
							className="bg-blue-800 px-3 py-2 rounded-lg block hover:bg-blue-900 transition duration-300"
						>
							<div className="flex text-white ">
								<PlusIcon className="h-5 w-5 self-center" />
								<span className="pl-2 font-semibold">Añadir un Producto</span>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div className="mt-4 border border-gray-300 rounded-lg py-3">
				<table className="w-full table-fixed">
					<thead className="border-b">
						<tr>
							<th className="text-left p-2 w-1/6">
								Producto
							</th>
							<th className="text-left p-2 w-2/6">
								Descripcion
							</th>
							<th className="text-left p-2 w-1/6">
								Cantidad
							</th>
							<th className="text-left p-2 w-1/6">
								Sub total
							</th>
							<th className="text-center p-2 w-1/6">
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						{
							service_products.map((ser_product) => (
								<tr key={ser_product.id} className="hover:bg-gray-50 border-b border-t">
									<td className="text-left p-2">
										{ser_product.product_detail.name}
									</td>
									<td className="text-left p-2">
										{ser_product.description}
									</td>
									<td className="text-left p-2">
										{ser_product.quantity}
									</td>
									<td className="text-left p-2">
										S/ {ser_product.total}
									</td>
									<td className="p-2">
										<div className="flex justify-center p-2">
											<button
												className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
												onClick={() => handleEditProduct(ser_product)}
											>
												<PencilAltIcon className="h-5" />
											</button>
											<button
												className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
												onClick={() => handleDeleteProduct(ser_product.id)}
											>
												<TrashIcon className="h-5" />
											</button>
										</div>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}
