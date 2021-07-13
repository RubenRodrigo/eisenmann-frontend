import React from 'react'
import Link from 'next/link'

import { PlusIcon } from '@heroicons/react/outline'

import { TableService } from '../../components/Service/table/TableService'

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

const Service = () => {
	return (
		<>
			<Navigation />
			<div>
				<TableService />
			</div>
		</>
	)
}

export default Service