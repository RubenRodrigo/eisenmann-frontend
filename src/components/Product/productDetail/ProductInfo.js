import React from 'react'
import { useSelector } from 'react-redux'
import { Stock } from '../../ui/Stock'

const ProductInfo = () => {

	const { product } = useSelector(state => state.productActive)

	const {
		id,
		type,
		type_detail,
		unit,
		unit_detail,
		code,
		name,
		description,
		created_at,
		updated_at,
		total_stock,
		current_price,
	} = product

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
							<p className="ml-2">{name}</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Tipo:</h3>
							<p className="ml-2">{type_detail?.name}</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Unidad:</h3>
							<p className="ml-2">{unit_detail?.name}</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Descripcion:</h3>
							<p className="ml-2 break-all">{description}</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 border border-gray-300 rounded-lg">
					<div className="border-b border-gray-300 p-2">
						<h3 className="text-lg font-bold">
							Detalles del Producto
						</h3>
					</div>
					<div className="p-2">
						<div className="flex p-2 gap-x-2">
							<h3 className="font-bold self-center">Stock:</h3>
							<Stock value={total_stock} />
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Precio Actual:</h3>
							<p className="ml-2">S/ {current_price}</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Fecha de Creación:</h3>
							<p className="ml-2">{created_at}</p>
						</div>
					</div>
				</div>
				{/* <div className="col-span-1 border border-gray-300 rounded-lg p-4">
					<div className="flex flex-col gap-4">
						<button
							onClick={handleReport}
							className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
							Ver reporte
						</button>
						<button
							onClick={handleDelete}
							className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
						>
							Eliminar servicio
						</button>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default ProductInfo
