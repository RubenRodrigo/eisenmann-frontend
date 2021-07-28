import React, { useEffect } from 'react'

import { AnnotationIcon, ArchiveIcon, CalculatorIcon } from '@heroicons/react/outline'
import { TextField } from '../../ui/TextField'
import Modal from '../../Modal/Modal'
import { useForm } from 'react-hook-form'

export const ServiceProductModal = ({ open, setOpen, initialValues, handleSubmitForm }) => {

	const { register, handleSubmit, setValue, formState: { errors } } = useForm();


	useEffect(() => {
		setValue('product', initialValues.product, { shouldValidate: true })
		setValue('description', initialValues.description, { shouldValidate: true })
		setValue('quantity', initialValues.quantity, { shouldValidate: true })
	}, [setValue, initialValues])

	return (
		<div>
			<Modal open={open} setOpen={setOpen} >
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					{/* Modal Header */}
					<div className="bg-gray-50 px-4 py-3 sm:px-6 ">
						<h3 className="text-2xl">Añadir Producto</h3>
					</div>

					{/* Modal Body */}
					<div className="bg-white px-6 py-4">
						<div className="pb-5">
							<div className="mb-5">
								<label className="mb-2 block text-md text-gray-600">Producto</label>
								<TextField
									type="text"
									placeholder="Producto"
									name="product"
									register={register}
									required
									error={errors.product}
								>
									<ArchiveIcon className="h-5 self-center" />
								</TextField>
							</div>
							<div className="mb-5">
								<label className="mb-2 block text-md text-gray-600">Descripcion</label>
								<TextField
									type="text"
									placeholder="Descripcion"
									name="description"
									register={register}
									required
									error={errors.description}
								>
									<AnnotationIcon className="h-5 self-center" />
								</TextField>
							</div>
							<div className="mb-5">
								<label className="mb-2 block text-md text-gray-600">Cantidad</label>
								<TextField
									type="number"
									placeholder="15"
									name="quantity"
									register={register}
									required
									error={errors.quantity}
								>
									<CalculatorIcon className="h-5 self-center" />
								</TextField>
							</div>
						</div>
						<div className="pb-5">
							<div className="grid grid-cols-2 gap-4">
								<div className="col-span-1">
									<label className="mb-2 block text-lg text-gray-600">Precio Unitario</label>
									<p className="border-b border-black pb-2"><span>S/.</span> 15</p>
								</div>
								<div className="col-span-1">
									<label className="mb-2 block text-lg text-gray-600">Sub Total</label>
									<p className="border-b border-black pb-2"><span>S/.</span> 60</p>
								</div>
							</div>
						</div>
					</div>

					{/* Modal Footer */}
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							onClick={() => setOpen(false)}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
							onClick={() => setOpen(false)}
						>
							Guardar
						</button>
					</div>
				</form>
			</Modal>
		</div>
	)
}
