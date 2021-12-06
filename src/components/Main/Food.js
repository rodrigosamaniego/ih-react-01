// ./src/components/Main/Food.js

// 1. IMPORTACIONES
import React from 'react'

// 2. EXPORTACIÓN DE FUNCIÓN
export default function Food(props) {

	const list 			= props.list
	const restaurants	= props.restaurants

	return (
		// <> -> Son fragmentos. Siempre van en un componente.
		<> 
			{
				list.map((e, index) => {
					return (
						<div key={index}>
							<p>la comida es:</p>
							<p>{e}</p>
						</div>
					)
				})
			}
			<hr />
			{
				restaurants.map((e, index) => {
					return (
						<div key={index}>
							<p>El restaurante se llama: {e.nombre} y su platillo es: {e.platilloPrincipal}</p>
						</div>
					)
				})
			}
		</>		
	)
}