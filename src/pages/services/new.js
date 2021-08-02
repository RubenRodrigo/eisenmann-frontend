import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'

import { ArrowLeftIcon } from '@heroicons/react/outline'
import moment from 'moment'

import { ServiceForm } from '../../components/Service/serviceForm/ServiceForm'
import { serviceStartAddNew } from '../../actions/service'

const Navigation = ({ router }) => {

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

	const dispatch = useDispatch()

	const router = useRouter()

	const initialValues = {
		name: 'Nombre',
		client: '1',
		code: '516156',
		estimated_price: '152',
		init_date: moment().format('YYYY-MM-DD'),
		end_date: moment().format('YYYY-MM-DD'),
		observations: 'ff',
		state: false,
	}

	const handleSubmitForm = (data) => {
		console.log(data)
		dispatch(serviceStartAddNew(data, router));
	}

	return (
		<>
			<Navigation router={router} />
			<div className="mt-4 border border-gray-300 rounded-lg py-4 px-6">
				<ServiceForm
					handleSubmitForm={handleSubmitForm}
					initialValues={initialValues}
				/>
			</div >
		</>
	)
}

export default NewService
