import { ArrowLeftIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { ProductForm } from '../../components/Product/productForm/ProductForm'

const Navigation = ({ router }) => {

	return (
		<div className="flex justify-between">
			<div>
				<h1 className="text-3xl	font-semibold">Añadir un nuevo Producto</h1>
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

const NewProduct = () => {

	const router = useRouter()

	const initialValues = {
		name: 'Soldadura 6011',
		description: 'Se usa para soldaduras libianas',
		stock: '15',
		unit: 'KG',
		unit_price: '20',
		type: 'Soldadura',
	}

	const handleSubmitForm = (data) => {
		console.log(data);
		data.id = Date.now();
		// dispatch(serviceAddNew(data));
		router.push('/products')
	}

	return (
		<>
			<Navigation router={router} />
			<div className="mt-4 border border-gray-300 rounded-lg py-4 px-6">
				<ProductForm initialValues={initialValues} handleSubmitForm={handleSubmitForm} />
			</div >
		</>
	)
}

export default NewProduct