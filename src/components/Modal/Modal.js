/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AnnotationIcon, ArchiveIcon, CalculatorIcon } from '@heroicons/react/outline'
import { TextField } from '../ui/TextField'

export default function Modal({ open, setOpen }) {

	const cancelButtonRef = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Modal Form");
	}

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				static
				className="fixed z-10 inset-0 overflow-y-auto"
				initialFocus={cancelButtonRef}
				open={open}
				onClose={setOpen}
			>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
							<form onSubmit={handleSubmit}>

								{/* Modal Header */}
								<div className="bg-gray-50 px-4 py-3 sm:px-6 ">
									<h3 className="text-2xl">Añadir Producto</h3>
								</div>

								{/* Modal Body */}
								<div className="bg-white px-6 py-4">
									<div className="pb-5">
										<div className="mb-5">
											<label className="mb-2 block text-md text-gray-600">Producto</label>
											<TextField type="text" placeholder="Producto">
												<ArchiveIcon className="h-5 self-center" />
											</TextField>
										</div>
										<div className="mb-5">
											<label className="mb-2 block text-md text-gray-600">Descripcion</label>
											<TextField type="text" placeholder="Descripcion">
												<AnnotationIcon className="h-5 self-center" />
											</TextField>
										</div>
										<div className="mb-5">
											<label className="mb-2 block text-md text-gray-600">Cantidad</label>
											<TextField type="number" placeholder="15">
												<CalculatorIcon className="h-5 self-center" />
											</TextField>
										</div>
									</div>
									<div className="pb-5">
										<div className="grid grid-cols-2 gap-4">
											<div className="col-span-1">
												<label className="mb-2 block text-lg text-gray-600">Precio Unitario</label>
												<p className="border-b border-black pb-2"><span>S/.</span> 15</p>
											</div>
											<div className="col-span-1">
												<label className="mb-2 block text-lg text-gray-600">Sub Total</label>
												<p className="border-b border-black pb-2"><span>S/.</span> 60</p>
											</div>
										</div>
									</div>
								</div>

								{/* Modal Footer */}
								<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
									<button
										type="button"
										className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen(false)}
										ref={cancelButtonRef}
									>
										Cancel
									</button>
									<button
										type="submit"
										className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen(false)}
									>
										Guardar
									</button>
								</div>
							</form>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
