import React from 'react'
import { NavProduct } from '../../components/Product/NavProduct'
import { TableProduct } from '../../components/Product/TableProduct'

const Products = () => {
	return (
		<>
			<NavProduct />
			<div>
				<TableProduct />
			</div>
		</>
	)
}

export default Products