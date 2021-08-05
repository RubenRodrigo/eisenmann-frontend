import React from 'react'
import { useSelector } from 'react-redux'

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
		sub_product
	} = product

	return (
		<div>
			<pre>
				product
			</pre>
		</div>
	)
}

export default ProductInfo
