// ./src/components/Main/index.js

// 1. IMPORTACIONES
import React from 'react'
import Food from './Food'
import Movies from './Movies'

// 2. FUNCIONES
function Main (){


	const foodList = [
		"tamales",
		"tortas",
		"tacos"
	]

	const restaurantsList = [
		{
			nombre: "McDonalds",
			platilloPrincipal: "Hamburguesas"
		},
		{
			nombre: "Pizza Hut",
			platilloPrincipal: "Pizza"
		},
		{
			nombre: "La casa de Toño",
			platilloPrincipal: "Taquitos de cochinita"
		}
	]

	const moviesList = [
		{
			titulo: "Drive",
			director: "Nicholas Winding",
		},
		{
			titulo: "Mid 90s",
			director: "Jonah Hill"
		},
		{
			titulo: "Esto no es Berlín",
			director: "Hari Sama"
		}
	]


	return (
		<>
		<Food list={foodList} restaurants={restaurantsList} />
		<hr />
		<Movies list={moviesList}/>
		</>
	)

}


// 3. EXPORTACIÓN
export default Main