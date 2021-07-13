import React from 'react'

export const InfoService = () => {
	return (
		<div className="shadow-md p-4 my-5">
			<div className="grid grid-cols-2 gap-4 mt-5">
				<div className="col-span-1 border border-gray-300 rounded-lg">
					<div className="border-b border-gray-300 p-2">
						<h3 className="text-lg font-bold">
							Informacion del Servicio
						</h3>
					</div>
					<div className="p-2">
						<div className="flex p-2">
							<h3 className="font-bold">Cliente:</h3>
							<p className="ml-2">Rodrigo</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Codigo:</h3>
							<p className="ml-2">15610</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Observaciones:</h3>
							<p className="ml-2">Rodrigo</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Descripcion:</h3>
							<p className="ml-2">15610</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 border border-gray-300 rounded-lg">
					<div className="border-b border-gray-300 p-2">
						<h3 className="text-lg font-bold">
							Estado del Servicio
						</h3>
					</div>
					<div className="p-2">
						<div className="flex p-2">
							<h3 className="font-bold">Estado:</h3>
							<p className="ml-2 bg-yellow-400 text-white px-3 rounded-full">Activo</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Fecha de Inicio:</h3>
							<p className="ml-2">10/15/2021</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Fecha de Fin:</h3>
							<p className="ml-2">10/15/2021</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Precio Inicial:</h3>
							<p className="ml-2">S/ 155</p>
						</div>
						<div className="flex p-2">
							<h3 className="font-bold">Precio Final:</h3>
							<p className="ml-2">S/ 255</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
