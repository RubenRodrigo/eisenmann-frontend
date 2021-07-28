import React from 'react'

import { ArrowRightIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'

export const TableRow = () => {

	const router = useRouter()

	const handleProductEditClick = () => {


		router.push({
			pathname: '/products/[pid]',
			query: { pid: 1 },
		})

	}

	return (
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
					<button
						onClick={handleProductEditClick}
						className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
					>
						<ArrowRightIcon className="h-5" />
					</button>
					<button
						onClick={handleProductEditClick}
						className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
					>
						<PencilAltIcon className="h-5" />
					</button>
				</div>
			</td>
		</tr>
	)
}
