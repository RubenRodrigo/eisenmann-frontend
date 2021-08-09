import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

import { ArrowLeftIcon } from '@heroicons/react/outline'

import { fetchSinToken } from '../../helpers/fetch'
import { useDispatch, useSelector } from 'react-redux'
import { productClearActive, productSetActive } from '../../actions/product'
import ProductInfo from '../../components/Product/productDetail/ProductInfo'
import { TableSubProducts } from '../../components/Product/productDetail/TableSubProducts'

export async function getServerSideProps(context) {
	const { pid } = context.params

	try {
		const resp = await fetchSinToken(`product/${pid}`);
		const initialState = await resp.json();
		return {
			props: { initialState }
		}

	} catch (error) {
		console.log(error);
		return {
			props: { initialState: [] }
		}
	}

}

const Product = ({ initialState }) => {

	const dispatch = useDispatch()
	const router = useRouter()
	const { pid } = router.query

	useEffect(() => {
		dispatch(productSetActive(initialState))

		return () => {
			dispatch(productClearActive())
		}

	}, [dispatch, initialState])

	const { loading } = useSelector(state => state.productActive)

	return (
		<>
			<Navigation pid={pid} router={router} />
			{
				(!loading) &&
				<>
					<ProductInfo />
					<TableSubProducts />
				</>
			}
		</>
	)
}

const Navigation = ({ pid, router }) => {
	return (
		<div className="flex justify-between">
			<div>
				<h1 className="text-3xl	font-semibold">Producto {pid}</h1>
			</div>
			<div>
				<button
					onClick={() => router.push('/products')}
					className="border rounded-lg block border-blue-800 hover:bg-gray-100 transition duration-300 px-3 py-2"
				>
					<div className="flex text-blue-800  ">
						<ArrowLeftIcon className="h-5 w-5 self-center" />
						<span className="pl-2 font-semibold">Cancelar</span>
					</div>
				</button>
			</div>
		</div>
	)
}

export default Product
