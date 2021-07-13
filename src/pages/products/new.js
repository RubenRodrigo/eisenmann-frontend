import { ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

const NewProduct = () => {
	return (
		<>
			{/* TODO: Create a new Component for this nav */}
			<div>
				<div className="flex justify-between">
					<div>
						<h1 className="text-3xl	font-semibold">Añadir un Producto</h1>
					</div>
					<div>
						<Link href="/products/">
							<a className="hover:bg-gray-200 hover:border-blue-900 border border-blue-700 px-3 py-2 rounded-lg block transition duration-300">
								<div className="flex text-blue-800">
									<ArrowLeftIcon className="h-5 w-5 self-center" />
									<span className="pl-2 font-semibold">Cancelar</span>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div
				className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-5"
			>
				<div>
					<div
						className='flex p-2 rounded-lg border-gray-400 border hover:border-gray-800'
					>
						<input
							className="focus:outline-none ml-3 placeholder-gray-600 text-lg w-full"
							type="text"
							placeholder="Producto"
						/>
					</div>
				</div>
				<br />
				<div>
					<div
						className='flex p-2 rounded-lg border-gray-400 border hover:border-gray-800'
					>
						<input
							className="focus:outline-none ml-3 placeholder-gray-600 text-lg w-full"
							type="text"
							placeholder="Stock"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewProduct