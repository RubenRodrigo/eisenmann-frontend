import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productStartUpdate } from '../../../actions/product'
import { ProductModalForm } from '../productForm/ProductModalForm'
import { TableNav } from './TableNav'
import { TableRow } from './TableRow'

export const TableProduct = () => {

	const dispatch = useDispatch()
	const { products } = useSelector(state => state.productList)
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [formValues, setFormValues] = useState({ stock: 0 })

	const handleOpenModal = (currentProduct) => {
		setFormValues(currentProduct)
		setOpen(true)
	}
	const handleSubmitForm = (data) => {
		data.id = formValues.id
		dispatch(productStartUpdate(data, router))
		setOpen(false)
	}

	return (
		<div className="mt-4 border border-gray-300 rounded-lg py-3">
			<ProductModalForm
				open={open}
				setOpen={setOpen}
				initialValues={formValues}
				handleSubmitForm={handleSubmitForm}
			/>
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
						<th className="text-left p-2">
							Unidad
						</th>
						<th className="text-left p-2">
							Precio Unitario
						</th>
						<th className="text-center p-2">
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map(product => (
							<TableRow
								key={product.id}
								currentProduct={product}
								handleOpenModal={handleOpenModal}
							/>
						))
					}
				</tbody>
			</table>
		</div>
	)
}
