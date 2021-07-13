import { ArrowRightIcon, PencilAltIcon } from '@heroicons/react/outline'
import React from 'react'
import { TableNav } from './TableNav'

export const TableProduct = () => {
	return (
		<div className="mt-4 border border-gray-300 rounded-lg py-3">
			<TableNav />
			<table className="w-full">
				<thead className="border-b">
					<tr>
						<th className="text-left p-2">
							Codigo
						</th>
						<th className="text-left p-2">
							Nombre
						</th>
						<th className="text-left p-2">
							Inventario
						</th>
						<th className="text-left p-2">
							Tipo
						</th>
						<th className="text-center p-2">
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="hover:bg-gray-50 border-b border-t">
						<td className="text-left p-2">
							8128
						</td>
						<td className="text-left p-2">
							Soldadura
						</td>
						<td className="text-left p-2">
							<span className="bg-yellow-400 text-white px-3 py-1 rounded-full">
								3 en stock
							</span>
						</td>
						<td className="text-left p-2">
							Mecanico
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
	)
}
