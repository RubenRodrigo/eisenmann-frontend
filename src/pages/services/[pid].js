import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import { InfoService } from '../../components/Service/service/InfoService'
import { TableInfoService } from '../../components/Service/service/TableInfoService'
import { PencilAltIcon } from '@heroicons/react/outline'

const Navigation = ({ pid }) => {
	return (
		<div className="flex justify-between">
			<div>
				<h1 className="text-3xl	font-semibold">Servicio {pid}</h1>
			</div>
			<div>
				<Link href="/services/new">
					<a className="bg-blue-800 px-3 py-2 rounded-lg block hover:bg-blue-900 transition duration-300">
						<div className="flex text-white ">
							<PencilAltIcon className="h-5 w-5 self-center" />
							<span className="pl-2 font-semibold">Editar Servicio</span>
						</div>
					</a>
				</Link>
			</div>
		</div>
	)
}

const Service = () => {
	const router = useRouter()
	const { pid } = router.query
	return (
		<>
			<Navigation pid={pid} />
			<InfoService />
			<TableInfoService />
		</>
	)
}

export default Service
