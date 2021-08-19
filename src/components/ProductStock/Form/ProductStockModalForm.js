import React, { useEffect, useState } from 'react'

import Modal from '../../Modal/Modal'
import { useForm } from 'react-hook-form'
import { Select } from '../../ui/Select'
import { useDispatch, useSelector } from 'react-redux'
import { uiCloseProductStockModal } from '../../../actions/ui'
import { productClearData, productStartLoadingData } from '../../../actions/product'

export const ProductStockModalForm = ({ open, setOpen, initialValues, handleSubmitForm }) => {

	const dispatch = useDispatch()
	const { modalOpen } = useSelector(state => state.uiProductStockModal)
	const { products } = useSelector(state => state.productList)

	const { register, handleSubmit, setValue, formState: { errors } } = useForm();

	useEffect(() => {
		setValue('product', initialValues.product, { shouldValidate: true })
	}, [setValue, initialValues])

	useEffect(() => {
		if (modalOpen) {
			dispatch(productStartLoadingData())
		} else {
			dispatch(productClearData())
		}
	}, [dispatch, modalOpen])

	return (
		<div>
			<Modal open={modalOpen} setOpen={() => dispatch(uiCloseProductStockModal())} >
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					{/* Modal Header */}
					<div className="bg-gray-50 px-4 py-3 sm:px-6 ">
						<h3 className="text-2xl">Nueva entrada</h3>
					</div>

					{/* Modal Body */}
					<div className="bg-white px-6 py-4">
						<div className="pb-5">
							<div className="mb-5">
								<label className="mb-2 block text-md text-gray-600">Producto</label>
								<Select
									name="product"
									register={register}
									required
									disabled={initialValues.id ? true : false}
									error={errors.product}
								>
									<option
										value={0}
										disabled
									>
										Selecciona una opcion
									</option>
									{
										products.map((product, index) => (
											<option
												key={product.id}
												value={product.id}
											>
												{product.name}
											</option>
										))
									}
								</Select>
								{errors.product && <span className="text-red-500 text-sm">Este campo es requerido</span>}
							</div>
						</div>
					</div>

					{/* Modal Footer */}
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							onClick={() => dispatch(uiCloseProductStockModal())}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
						>
							Guardar
						</button>
					</div>
				</form>
			</Modal>
		</div>
	)
}
