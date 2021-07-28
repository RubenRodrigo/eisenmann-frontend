import React from 'react'
import { TableNav } from './TableNav'
import { TableRow } from './TableRow'

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
					<TableRow />
				</tbody>
			</table>
		</div>
	)
}
