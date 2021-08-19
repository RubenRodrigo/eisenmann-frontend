import React from 'react'

import { ArrowRightIcon, TrashIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { Stock } from '../../ui/Stock'
import { productStockStartDelete } from '../../../actions/productStock'

export const TableRow = ({ currentProduct, handleOpenEntryModal, handleOpenRealModal }) => {

	const dispatch = useDispatch()
	const router = useRouter()


	// const handleProductEdit = () => {

	// 	router.push({
	// 		pathname: '/products/edit/[pid]',
	// 		query: { pid: currentProduct.id },
	// 	})

	// }

	const handleProductDelete = () => {
		dispatch(productStockStartDelete(currentProduct.id))
	}

	return (
		<tr className="hover:bg-gray-50 border-b border-t">
			<td className="text-left p-2">
				{currentProduct.product_detail.code}
			</td>
			<td className="text-left p-2">
				{currentProduct.product_detail.name}
			</td>

			<td className="text-left p-2">
				{currentProduct.product_detail.type_detail.name}
			</td>
			<td className="text-left p-2">
				{currentProduct.product_detail.unit_detail.name}
			</td>

			<td className="text-left p-2">
				<button
					type="button"
					onClick={() => handleOpenEntryModal(currentProduct)}
				>
					<Stock value={parseInt(currentProduct.total_stock)} />
				</button>
			</td>

			<td className="text-left p-2">
				<button
					type="button"
					className="px-4 py-1 border border-black rounded-full"
					onClick={() => handleOpenRealModal(currentProduct)}
				>
					{currentProduct.real_stock}
				</button>
			</td>
			<td className="text-left p-2">
				{currentProduct.difference_stock}
			</td>
			<td className="p-2">
				<div className="flex justify-center p-2">
					<button
						className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
						onClick={() => router.push({ pathname: '/product-stock/[pid]', query: { pid: currentProduct.id } })}
					>
						<ArrowRightIcon className="h-5" />
					</button>
					{/* <button
						onClick={handleProductEdit}
						className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
					>
						<PencilAltIcon className="h-5" />
					</button> */}
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
