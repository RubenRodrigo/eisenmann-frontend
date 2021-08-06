import React from 'react'

import { ArrowRightIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { productStartDelete } from '../../../actions/product'
import { useForm } from 'react-hook-form'
import { Stock } from '../../ui/Stock'

export const TableRow = ({ currentProduct, handleOpenModal, handleSubmitRowForm }) => {

	const dispatch = useDispatch()
	const router = useRouter()
	const { id, type, type_detail, unit, unit_detail, code, name, description, unit_price, total_stock } = currentProduct

	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		defaultValues: {
			real: '15',
			id,
		}
	});

	// const watchReal = watch("real", false); // you can supply default value as second argument

	const handleProductEdit = () => {

		router.push({
			pathname: '/products/edit/[pid]',
			query: { pid: id },
		})

	}

	const handleProductDelete = () => {
		dispatch(productStartDelete(id, router))
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
				{type_detail.name}
			</td>
			<td className="text-left p-2">
				{unit_detail.name}
			</td>

			<td className="text-left p-2">
				<button
					type="button"
					onClick={() => handleOpenModal(currentProduct)}
				>
					<Stock value={parseInt(total_stock)} />
				</button>
			</td>

			{/* <td className="text-left p-2">
				<form onSubmit={handleSubmit(handleSubmitRowForm)}>
					<input
						className="w-16 text-center focus:outline-none border-b"
						type="text"
						{...register('real', { required: true })}
					/>
				</form>
			</td>
			<td className="text-left p-2">
				{
					(watchReal) &&
					parseInt(stock) - parseInt(watchReal)
				}
			</td> */}
			<td className="p-2">
				<div className="flex justify-center p-2">
					<button
						className="p-3 hover:bg-gray-100 rounded-full transition duration-300"
						onClick={() => router.push({ pathname: '/products/[pid]', query: { pid: id } })}
					>
						<ArrowRightIcon className="h-5" />
					</button>
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
