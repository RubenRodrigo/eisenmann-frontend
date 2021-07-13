import React, { useState } from 'react'

import { ArrowRightIcon, PencilAltIcon, PlusIcon } from '@heroicons/react/outline'
import Modal from '../../Modal/Modal'

export const TableInfoService = () => {
	const [open, setOpen] = useState(false)
	const handleClick = () => {
		console.log('CLICK');
		setOpen(true)
	}

	return (
		<div className="shadow-md p-4">
			<Modal open={open} setOpen={setOpen} />
			<div>
				<div className="flex justify-between">
					<div>
						<h1 className="text-3xl	font-semibold">Lista de Subservicios y Productos</h1>
					</div>
					<div>
						<button
							onClick={handleClick}
							className="bg-blue-800 px-3 py-2 rounded-lg block hover:bg-blue-900 transition duration-300"
						>
							<div className="flex text-white ">
								<PlusIcon className="h-5 w-5 self-center" />
								<span className="pl-2 font-semibold">Añadir un Producto</span>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div className="mt-4 border border-gray-300 rounded-lg py-3">
				<table className="w-full table-fixed">
					<thead className="border-b">
						<tr>
							<th className="text-left p-2 w-1/6">
								Producto
							</th>
							<th className="text-left p-2 w-2/6">
								Descripcion
							</th>
							<th className="text-left p-2 w-1/6">
								Cantidad
							</th>
							<th className="text-left p-2 w-1/6">
								Sub total
							</th>
							<th className="text-center p-2 w-1/6">
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="hover:bg-gray-50 border-b border-t">
							<td className="text-left p-2">
								Soldadura
							</td>
							<td className="text-left p-2">
								Se uso para soldar la puerta
								Se uso para soldar la puerta
							</td>
							<td className="text-left p-2">
								3
							</td>
							<td className="text-left p-2">
								S/ 15
							</td>
							<td className="p-2">
								<div className="flex justify-center p-2">
									<div className="p-3 hover:bg-gray-100 rounded-full transition duration-300">
										<ArrowRightIcon className="h-5" />
									</div>
									<div className="p-3 hover:bg-gray-100 rounded-full transition duration-300">
										<PencilAltIcon className="h-5" />
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
