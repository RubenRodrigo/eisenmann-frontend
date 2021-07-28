import { PlusIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import { TableProduct } from '../../components/Product/productTable/TableProduct'

const Navigation = () => {
	return (
		<div className="flex justify-between">
			<div>
				<h1 className="text-3xl	font-semibold">Lista de Productos</h1>
			</div>
			<div>
				<Link href="/products/new">
					<a className="bg-blue-800 px-3 py-2 rounded-lg block hover:bg-blue-900 transition duration-300">
						<div className="flex text-white ">
							<PlusIcon className="h-5 w-5 self-center" />
							<span className="pl-2 font-semibold">Nuevo Producto</span>
						</div>
					</a>
				</Link>
			</div>
		</div>
	)
}

const Products = () => {
	return (
		<>
			<Navigation />
			<div>
				<TableProduct />
			</div>
		</>
	)
}

export default Products