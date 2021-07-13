import React, { useState } from 'react'

import { CalendarIcon, HomeIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

export const Sidebar = () => {

	return (
		<>
			<aside
				style={{ backgroundColor: '#242424' }}
				className="h-full pt-20 text-white w-64 fixed z-0"
			>
				<div className="py-2  h-full overflow-y-auto">
					<div className="link-container transition duration-200">
						<Link href="/">
							<a>
								<div className="flex p-3">
									<HomeIcon className="h-7 w-7" />
									<h3 className="pl-3">
										Home
									</h3>
								</div>
							</a>
						</Link>
					</div>
					<div className="link-container transition duration-200">
						<Link href="/services">
							<a>
								<div className="flex p-3">
									<CalendarIcon className="h-7 w-7" />
									<h3 className="pl-3">
										Servicios
									</h3>
								</div>
							</a>
						</Link>
					</div>
					<div className="link-container transition duration-200">
						<Link href="/products">
							<a>
								<div className="flex p-3">
									<ShoppingCartIcon className="h-7 w-7" />
									<h3 className="pl-3">
										Productos
									</h3>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</aside>
			<style jsx>
				{
					`
					.link-container:hover {
						background-color: #919191;
					}
					.link-container-selected{
						background-color: #424242;
					}
					`
				}
			</style>
		</>
	)
}
