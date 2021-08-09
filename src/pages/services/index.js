import React, { useEffect } from 'react'
import Link from 'next/link'

import { PlusIcon } from '@heroicons/react/outline'

import { TableService } from '../../components/Service/serviceTable/TableService'
import { serviceClearData, serviceSetData } from '../../actions/service'
import { useDispatch } from 'react-redux'
import { fetchSinToken } from '../../helpers/fetch'

export async function getServerSideProps() {
	// TODO: Verify if this service exist

	try {
		const resp = await fetchSinToken('service');
		const initialState = await resp.json();
		return {
			props: { initialState }
		}
	} catch (e) {
		console.log(e);
		return {
			props: { initialState: [] }
		}

	}


}

const Service = ({ initialState }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(serviceSetData(initialState))
		return () => {
			dispatch(serviceClearData())
		}
	}, [dispatch, initialState])

	return (
		<>
			<Navigation />
			<div>
				<TableService />
			</div>
		</>
	)
}

const Navigation = () => {
	return (
		<div className="flex justify-between">
			<div>
				<h1 className="text-3xl	font-semibold">Lista de Servicios</h1>
			</div>
			<div>
				<Link href="/services/new">
					<a className="bg-blue-800 px-3 py-2 rounded-lg block hover:bg-blue-900 transition duration-300">
						<div className="flex text-white ">
							<PlusIcon className="h-5 w-5 self-center" />
							<span className="pl-2 font-semibold">Nuevo Servicio</span>
						</div>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Service
