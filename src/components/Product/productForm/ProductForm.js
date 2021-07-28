import React from 'react'
import { useForm } from 'react-hook-form'

import { AnnotationIcon, BeakerIcon, BriefcaseIcon, CalculatorIcon, CalendarIcon, CashIcon, KeyIcon, UsersIcon } from '@heroicons/react/outline'

import { TextField } from '../../ui/TextField'
import { TextArea } from '../../ui/TextArea'

export const ProductForm = ({ handleSubmitForm, initialValues }) => {

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: initialValues
	});

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)}>
			<div className="grid grid-cols-2 gap-x-6 gap-y-4">
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Nombre</label>
					<TextField
						autoComplete="off"
						type="text"
						placeholder="Nombre"
						name="name"
						register={register}
						required
						error={errors.name}
					>
						<AnnotationIcon className="h-5 self-center" />
					</TextField>
					{errors.name && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Tipo de producto</label>
					<TextField
						autoComplete="off"
						type="text"
						placeholder="Tipo"
						name="type"
						register={register}
						required
						error={errors.type}
					>
						<BeakerIcon className="h-5 self-center" />
					</TextField>
					{errors.type && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Stock</label>
					<TextField
						autoComplete="off"
						type="number"
						placeholder="Stock"
						name="stock"
						register={register}
						required
						error={errors.stock}
					>
						<CalculatorIcon className="h-5 self-center" />
					</TextField>
					{errors.stock && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Precio Unitario</label>
					<TextField
						autoComplete="off"
						type="text"
						placeholder="Precio"
						name="unit_price"
						register={register}
						required
						error={errors.unit_price}
					>
						<CashIcon className="h-5 self-center" />
					</TextField>
					{errors.unit_price && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Unidad de medida</label>
					<TextField
						autoComplete="off"
						type="text"
						placeholder="Unidad"
						name="unit"
						register={register}
						required
						error={errors.unit}
					/>
					{errors.unit && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1">
				</div>
				<div className="col-span-2">
					<label className="mb-2 block text-md text-gray-600">Descripcion</label>
					<TextArea
						cols="30"
						rows="5"
						placeholder="Descripcion del producto"
						name="description"
						register={register}
					/>
				</div>
			</div >
			<div className="mt-5">
				<button
					type="submit"
					className="rounded-md bg-blue-800 hover:bg-blue-900 transition duration-300 text-white text-lg px-3 py-2"
				>
					Guardar Producto
				</button>
			</div>
		</form >
	)
}
