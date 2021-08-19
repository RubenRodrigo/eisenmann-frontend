import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import moment from 'moment'
import { PlusIcon, TrashIcon } from '@heroicons/react/outline'

export const ProductStockTable = () => {

	const { product } = useSelector(state => state.productActive)

	const {
		id,
		product_stock
	} = product

	return (
		<div className="shadow-md p-4">
			<div>
				<div className="flex justify-between">
					<div>
						<h1 className="text-3xl	font-semibold">Entradas del Producto</h1>
					</div>
				</div>
			</div>
			<div className="mt-4 border border-gray-300 rounded-lg py-3">
				<table className="w-full table-fixed">
					<thead className="border-b">
						<tr>
							<th className="text-left p-2 w-2/6">
								Stock Inicial
							</th>
							<th className="text-left p-2 w-1/6">
								Stock Total
							</th>
							<th className="text-left p-2 w-1/6">
								Precio total
							</th>
							<th className="text-left p-2 w-1/6">
								Stock Total Actual
							</th>
							<th className="text-left p-2 w-1/6">
								Stock Real
							</th>
							<th className="text-left p-2 w-1/6">
								Diferencia
							</th>
							<th className="text-left p-2 w-1/6">
								Fecha de creación
							</th>
						</tr>
					</thead>
					<tbody>
						{
							product_stock.map((stock) => (
								<tr key={stock.id} className="hover:bg-gray-50 border-b border-t">
									<td className="text-left p-2">
										{stock.init_stock}
									</td>
									<td className="text-left p-2">
										{stock.total_stock_entries}
									</td>
									<td className="text-left p-2">
										S/. {stock.total_stock_price}
									</td>
									<td className="text-left p-2">
										{stock.total_stock}
									</td>
									<td className="text-left p-2">
										{stock.real_stock}
									</td>
									<td className="text-left p-2">
										{stock.difference_stock}
									</td>
									<td className="text-left p-2">
										<h2>
											{moment(stock.created_at).format('DD-MM-YYYY')}
										</h2>
										<h2>
											{moment(stock.created_at).format('HH:mm')}
										</h2>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}
