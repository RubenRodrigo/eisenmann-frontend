import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'

import { ArrowLeftIcon } from '@heroicons/react/outline'
import { serviceAddNew, serviceClearActive, serviceSetActive, serviceStartUpdate } from '../../../actions/service'
import { useSelector } from 'react-redux'
import { ServiceForm } from '../../../components/Service/serviceForm/ServiceForm'
import { fetchSinToken } from '../../../helpers/fetch'

export async function getServerSideProps(context) {
	// TODO: Verify if this service exist
	const { pid } = context.params

	const resp = await fetchSinToken(`service/${pid}`);
	const initialState = await resp.json();
	return {
		props: { initialState }
	}
}

const ServiceEdit = ({ initialState }) => {

	const dispatch = useDispatch()
	const router = useRouter()

	useEffect(() => {
		dispatch(serviceSetActive(initialState))
		return () => {
			dispatch(serviceClearActive())
		}
	}, [dispatch, initialState])

	const { service, loading } = useSelector(state => state.serviceActive)
	const initialValues = {
		id: service.id,
		name: service.name,
		client: service.client,
		code: service.code,
		estimated_price: service.estimated_price,
		init_date: service.init_date,
		end_date: service.end_date,
		observations: service.observations,
		state: service.state,
	}

	const handleSubmitForm = (data) => {
		data.id = service.id
		dispatch(serviceStartUpdate(data, router));
	}

	return (
		<>
			<Navigation router={router} />
			<div className="mt-4 border border-gray-300 rounded-lg py-4 px-6">
				{
					(!loading) &&
					<ServiceForm
						handleSubmitForm={handleSubmitForm}
						initialValues={initialValues}
					/>
				}
			</div >
		</>
	)
}

const Navigation = ({ router }) => {

	return (
		<div className="flex justify-between">
			<div>
				<h1 className="text-3xl	font-semibold">Editar el Servicio</h1>
			</div>
			<div>
				<button
					onClick={() => router.back()}
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

export default ServiceEdit
