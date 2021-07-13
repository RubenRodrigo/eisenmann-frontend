import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { useForm } from 'react-hook-form'
import { ArrowLeftIcon, BriefcaseIcon, CalendarIcon, CashIcon, KeyIcon, UsersIcon } from '@heroicons/react/outline'


import { TextArea } from '../../components/ui/TextArea'
import { TextField } from '../../components/ui/TextField'

const Navigation = () => {

	const router = useRouter()

	return (
		<div className="flex justify-between">
			<div>
				<h1 className="text-3xl	font-semibold">Añadir un nuevo Servicio</h1>
			</div>
			<div>
				<button
					onClick={() => router.push('/services')}
					className="border rounded-lg block border-blue-800 hover:bg-gray-100 transition duration-300 px-3 py-2"
				>
					<div className="flex text-blue-800  ">
						<ArrowLeftIcon className="h-5 w-5 self-center" />
						<span className="pl-2 font-semibold">Cancelar</span>
					</div>
				</button>
			</div>
		</div>
	)
}

const NewService = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const handleSubmitForm = (data) => {
		console.log(data);
	}

	return (
		<>
			<Navigation />
			<div className="mt-4 border border-gray-300 rounded-lg py-4 px-6">
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<div className="grid grid-cols-2 gap-x-6 gap-y-4">
						<div className="col-span-1">
							<label className="mb-2 block text-md text-gray-600">Servicio</label>
							<TextField
								type="text"
								placeholder="Servicio"
								name="service"
								register={register}
								required
								error={errors.service}
							>
								<BriefcaseIcon className="h-5 self-center" />
							</TextField>
							{errors.service && <span className="text-red-500 text-sm">Este campo es requerido</span>}
						</div>
						<div className="col-span-1">
							<label className="mb-2 block text-md text-gray-600">Placa</label>
							<TextField
								type="text"
								placeholder="Placa"
								name="plaque"
								register={register}
								required
								error={errors.plaque}
							>
								<KeyIcon className="h-5 self-center" />
							</TextField>
							{errors.plaque && <span className="text-red-500 text-sm">Este campo es requerido</span>}
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
								<UsersIcon className="h-5 self-center" />
							</TextField>
							{errors.client && <span className="text-red-500 text-sm">Este campo es requerido</span>}
						</div>
						<div className="col-span-1">
							<label className="mb-2 block text-md text-gray-600">Precio</label>
							<TextField
								type="text"
								placeholder="Precio"
								name="price"
								register={register}
								required
								error={errors.price}
							>
								<CashIcon className="h-5 self-center" />
							</TextField>
							{errors.price && <span className="text-red-500 text-sm">Este campo es requerido</span>}
						</div>
						<div className="col-span-1 flex gap-2">
							<div className="flex-1">
								<label className="mb-2 block text-md text-gray-600">Fecha Inicio</label>
								<TextField
									type="date" placeholder="Fecha Inicio"
									name="initDate"
									register={register}
									required
									error={errors.initDate}
								>
									<CalendarIcon className="h-5 self-center" />
								</TextField>
								{errors.initDate && <span className="text-red-500 text-sm">Este campo es requerido</span>}
							</div>
							<div className="flex-initial self-end">
								<button className="p-3 text-blue-700 rounded hover:bg-blue-50 hover:underline">
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
									name="endDate"
									register={register}
									required
									error={errors.endDate}
								>
									<CalendarIcon className="h-5 self-center" />
								</TextField>
								{errors.endDate && <span className="text-red-500 text-sm">Este campo es requerido</span>}
							</div>
							<div className="flex-initial self-end">
								<button className="p-3 text-blue-700 rounded hover:bg-blue-50 hover:underline">
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
			</div >
		</>
	)
}

export default NewService
