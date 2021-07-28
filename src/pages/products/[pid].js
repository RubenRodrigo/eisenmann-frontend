import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import { ArrowLeftIcon, PencilAltIcon } from '@heroicons/react/outline'

import { InfoService } from '../../components/Service/serviceDetail/InfoService'
import { ProductForm } from '../../components/Product/productForm/ProductForm'

export async function getServerSideProps(context) {
	// TODO: Verify if this service exist
	const { pid } = context.params

	const initialState = {
		id: pid,
		name: 'Soldadura 7018',
		description: 'Se usa para soldaduras libianas',
		stock: '15',
		unit: 'KG',
		unit_price: '20',
		type: 'Soldadura',
	}

	return {
		props: { initialState }
	}
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
const Product = ({ initialState }) => {

	const router = useRouter()
	const { pid } = router.query
	// const dispatch = useDispatch()

	// dispatch(serviceSetActive(initialState))
	const handleSubmitForm = (data) => {
		console.log(data);
		data.id = Date.now();
		// dispatch(serviceAddNew(data));
		router.push('/products')
	}

	return (
		<>
			<Navigation pid={pid} router={router} />
			<div className="mt-4 border border-gray-300 rounded-lg py-4 px-6">
				<ProductForm initialValues={initialState} handleSubmitForm={handleSubmitForm} />
			</div >
		</>
	)
}



export default Product
