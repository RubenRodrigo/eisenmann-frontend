import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout/Layout'

const Product = () => {
	const router = useRouter()
	const { pid } = router.query
	return (
		<>
			{pid}
		</>
	)
}

export default Product;