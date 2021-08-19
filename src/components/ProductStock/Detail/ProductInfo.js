import React from 'react'
import { useSelector } from 'react-redux'

import moment from 'moment'

import { Stock } from '../../ui/Stock'

const ProductInfo = () => {

	const { productStock } = useSelector(state => state.productStockActive)

	const {
		id,
		product_detail,
		created_at,
		init_stock,
		total_stock,
		real_stock,
		current_price,
	} = productStock

	return (
		<div className="shadow-md p-4 my-5">
			<div className="grid grid-cols-2 gap-4 mt-5">
				<div className="col-span-1 border border-gray-300 rounded-lg">
					<div className="border-b border-gray-300 p-2">
						<h3 className="text-lg font-bold">
							Informacion del Producto
						</h3>
					</div>
					<div className="p-2">
						<div className="flex p-2">
							<h3 className="font-bold">Producto:</h3>
							<p className="ml-2">{product_detail.name}</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Tipo:</h3>
							<p className="ml-2">{product_detail.type_detail?.name}</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Unidad:</h3>
							<p className="ml-2">{product_detail.unit_detail?.name}</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Descripcion:</h3>
							<p className="ml-2 break-all">{product_detail.description}</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 border border-gray-300 rounded-lg">
					<div className="border-b border-gray-300 p-2">
						<h3 className="text-lg font-bold">
							Estado del Producto
						</h3>
					</div>
					<div className="p-2">
						<div className="flex p-2 gap-x-2">
							<h3 className="font-bold self-center">Stock Inicial:</h3>
							<Stock value={init_stock} />
						</div>
						<div className="flex p-2 gap-x-2">
							<h3 className="font-bold self-center">Stock Actual:</h3>
							<Stock value={total_stock} />
						</div>
						<div className="flex p-2 gap-x-2">
							<h3 className="font-bold self-center">Stock Real:</h3>
							<Stock value={real_stock} />
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Precio Actual:</h3>
							<p className="ml-2">S/ {current_price}</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Fecha de Creación:</h3>
							<div className="ml-2">
								<span className="pr-4">
									{moment(created_at).format('DD-MM-YYYY')}
								</span>
								<span className="pr-4">
									{moment(created_at).format('HH:mm')}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
