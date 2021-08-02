import React from 'react'

import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { productStartDelete } from '../../../actions/product'

export const TableRow = ({ currentProduct, handleOpenModal }) => {

	const dispatch = useDispatch()
	const router = useRouter()

	const { id, type, type_detail, unit, unit_detail, code, name, description, unit_price, stock } = currentProduct

	const handleProductEdit = () => {

		router.push({
			pathname: '/products/[pid]',
			query: { pid: id },
		})

	}

	const handleProductDelete = () => {
		dispatch(productStartDelete(id, router))
	}

	const Stock = ({ value }) => {
		if (value >= 30) {
			return (
				<span
					className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full"
				>
					{value} en stock
				</span>
			)
		} else if (value >= 15) {
			return (
				<span
					className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-full"
				>
					{value} en stock
				</span>
			)
		} else {
			return (
				<span
					className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
				>
					{value} en stock
				</span>
			)
		}

	}

	return (
		<tr className="hover:bg-gray-50 border-b border-t">
			<td className="text-left p-2">
				{code}
			</td>
			<td className="text-left p-2">
				{name}
			</td>
			<td className="text-left p-2">
				<button
					type="button"
					onClick={() => handleOpenModal(currentProduct)}
				>
					<Stock value={parseInt(stock)} />
				</button>
			</td>
			<td className="text-left p-2">
				{type_detail.name}
			</td>
			<td className="text-left p-2">
				{unit_detail.name}
			</td>
			<td className="text-left p-2">
				S/ {unit_price}
			</td>
			<td className="p-2">
				<div className="flex justify-center p-2">
					<button
						onClick={handleProductEdit}
						className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
					>
						<PencilAltIcon className="h-5" />
					</button>
					<button
						onClick={handleProductDelete}
						className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
					>
						<TrashIcon className="h-5" />
					</button>
				</div>
			</td>
		</tr>
	)
}
