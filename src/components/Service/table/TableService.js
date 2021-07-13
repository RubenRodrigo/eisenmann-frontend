import { ArrowRightIcon, PencilAltIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import { TableNav } from './TableNav'

export const TableService = () => {
	return (
		<div className="mt-4 border border-gray-300 rounded-lg py-3">
			<TableNav />
			<table className="w-full">
				<thead className="border-b">
					<tr>
						<th className="text-left p-2">
							Cliente
						</th>
						<th className="text-left p-2">
							Placa
						</th>
						<th className="text-left p-2">
							Precio Estimado
						</th>
						<th className="text-left p-2">
							Fecha de Inicio
						</th>
						<th className="text-left p-2">
							Fecha de Termino
						</th>
						<th className="text-left p-2">
							Estado
						</th>
						<th className="text-center p-2">
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="hover:bg-gray-50 border-b border-t">
						<td className="text-left p-2">
							Rodrigo
						</td>
						<td className="text-left p-2">
							FVF-X54
						</td>
						<td className="text-left p-2">
							S/ 500.00
						</td>
						<td className="text-left p-2">
							15-11-21
						</td>
						<td className="text-left p-2">
							19-11-21
						</td>
						<td className="text-left p-2">
							<span className="bg-yellow-400 text-white px-3 py-1 rounded-full">
								Activo
							</span>
						</td>
						<td className="p-2">
							<div className="flex justify-center p-2 gap-x-2">
								<Link href={`/services/${encodeURIComponent(1)}`}>
									<a>
										<div className="p-3 hover:bg-gray-100 rounded-full transition duration-300">
											<ArrowRightIcon className="h-5" />
										</div>
									</a>
								</Link>
								<Link href={`/services/edit/${encodeURIComponent(1)}`}>
									<a>
										<div className="p-3 hover:bg-gray-100 rounded-full transition duration-300">
											<PencilAltIcon className="h-5" />
										</div>
									</a>
								</Link>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
