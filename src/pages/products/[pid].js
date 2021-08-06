import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

import { ArrowLeftIcon } from '@heroicons/react/outline'

import { fetchSinToken } from '../../helpers/fetch'
import { useDispatch, useSelector } from 'react-redux'
import { productClearActive, productSetActive, productStartUpdate } from '../../actions/product'
import { typeClearData, typeSetData } from '../../actions/type'
import { unitClearData, unitSetData } from '../../actions/unit'
import ProductInfo from '../../components/Product/productDetail/ProductInfo'
import { TableSubProducts } from '../../components/Product/productDetail/TableSubProducts'

export async function getServerSideProps(context) {
	const { pid } = context.params

	const resp = await fetchSinToken(`product/${pid}`);
	const type = await fetchSinToken('product/type');
	const unit = await fetchSinToken('product/unit');

	const initialState = await resp.json();
	const units = await unit.json();
	const types = await type.json();

	return {
		props: { initialState, types, units }
	}
}

const Product = ({ initialState, types, units }) => {

	const dispatch = useDispatch()
	const router = useRouter()
	const { pid } = router.query

	useEffect(() => {
		dispatch(productSetActive(initialState))

		dispatch(typeSetData(types))
		dispatch(unitSetData(units))

		return () => {
			dispatch(productClearActive())

			dispatch(typeClearData())
			dispatch(unitClearData())
		}
	}, [dispatch, initialState, types, units])

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
