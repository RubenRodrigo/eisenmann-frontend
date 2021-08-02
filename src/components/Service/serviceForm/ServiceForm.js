import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { BriefcaseIcon, CalendarIcon, CashIcon, KeyIcon, UsersIcon } from '@heroicons/react/outline'
import moment from 'moment'

import { TextField } from '../../ui/TextField'
import { TextArea } from '../../ui/TextArea'

export const ServiceForm = ({ handleSubmitForm, initialValues }) => {

	const { register, handleSubmit, setValue, formState: { errors } } = useForm();

	useEffect(() => {
		setValue('name', initialValues.name, { shouldValidate: true })
		setValue('client', initialValues.client, { shouldValidate: true })
		setValue('code', initialValues.code, { shouldValidate: true })
		setValue('estimated_price', initialValues.estimated_price, { shouldValidate: true })
		setValue('init_date', initialValues.init_date, { shouldValidate: true })
		setValue('end_date', initialValues.end_date, { shouldValidate: true })
		setValue('observations', initialValues.observations, { shouldValidate: true })
		setValue('state', initialValues.state, { shouldValidate: true })
	}, [setValue, initialValues])

	const handleSetInitDate = () => {
		setValue('init_date', moment().format('YYYY-MM-DD'), { shouldValidate: true })
	}

	const handleSetEndDate = () => {
		setValue('end_date', moment().format('YYYY-MM-DD'), { shouldValidate: true })
	}

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)}>
			<div className="grid grid-cols-2 gap-x-6 gap-y-4">
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Servicio</label>
					<TextField
						type="text"
						placeholder="Servicio"
						name="name"
						register={register}
						required
						error={errors.name}
					>
						<BriefcaseIcon className="h-5 self-center pl-2" />
					</TextField>
					{errors.name && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Placa</label>
					<TextField
						type="text"
						placeholder="Placa"
						name="code"
						register={register}
						required
						error={errors.code}
					>
						<KeyIcon className="h-5 self-center pl-2" />
					</TextField>
					{errors.code && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Cliente</label>
					<TextField
						type="text"
						placeholder="Cliente"
						name="client"
						register={register}
						required
						error={errors.client}
					>
						<UsersIcon className="h-5 self-center pl-2" />
					</TextField>
					{errors.client && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1">
					<label className="mb-2 block text-md text-gray-600">Precio Estimado</label>
					<TextField
						type="text"
						placeholder="Precio"
						name="estimated_price"
						register={register}
						required
						error={errors.estimated_price}
					>
						<CashIcon className="h-5 self-center pl-2" />
					</TextField>
					{errors.estimated_price && <span className="text-red-500 text-sm">Este campo es requerido</span>}
				</div>
				<div className="col-span-1 flex gap-2">
					<div className="flex-1">
						<label className="mb-2 block text-md text-gray-600">Fecha Inicio</label>
						<TextField
							type="date" placeholder="Fecha Inicio"
							name="init_date"
							register={register}
							required
							error={errors.init_date}
						>
							<CalendarIcon className="h-5 self-center pl-2" />
						</TextField>
						{errors.init_date && <span className="text-red-500 text-sm">Este campo es requerido</span>}
					</div>
					<div className="flex-initial self-end">
						<button
							type="button"
							onClick={handleSetInitDate}
							className="p-3 text-blue-700 rounded hover:bg-blue-50 hover:underline"
						>
							Fecha actual
						</button>
					</div>
				</div >
				<div className="col-span-1">
				</div>
				<div className="col-span-1 flex gap-2">
					<div className="flex-1">
						<label className="mb-2 block text-md text-gray-600">Fecha Fin</label>
						<TextField
							type="date"
							placeholder="Fecha Fin"
							name="end_date"
							register={register}
							required
							error={errors.end_date}
						>
							<CalendarIcon className="h-5 self-center pl-2" />
						</TextField>
						{errors.end_date && <span className="text-red-500 text-sm">Este campo es requerido</span>}
					</div>
					<div className="flex-initial self-end">
						<button
							type="button"
							onClick={handleSetEndDate}
							className="p-3 text-blue-700 rounded hover:bg-blue-50 hover:underline"
						>
							Fecha actual
						</button>
					</div>
				</div >
				<div className="col-span-1">
				</div>
				<div className="col-span-2">
					<label className="mb-2 block text-md text-gray-600">Observaciones</label>
					<TextArea
						cols="30"
						rows="5"
						placeholder="Observaciones"
						name="observations"
						register={register}
					/>
				</div>
			</div >
			<div className="mt-5">
				<button
					type="submit"
					className="rounded-md bg-blue-800 hover:bg-blue-900 transition duration-300 text-white text-lg px-3 py-2"
				>
					Guardar Servicio
				</button>
			</div>
		</form >
	)
}
