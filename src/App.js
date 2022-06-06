import logo from './logo.svg';
import './App.css';
import { Peliculas } from './Peliculas';
import { PageWrapper } from './PageWrapper';
import peliculasJson from './peliculas.json'
import { Paginacion } from './Paginacion';
import { useState } from 'react';

function App() {

	const [paginaActual, setPaginaActual] = useState(1);
	const Total_por_pagina = 3;

	let peliculas = peliculasJson;

	const buscarPeliculas = async() =>{
		let url = 'https://lucasmoy.dev/data/react/peliculas.json';

		let respuesta = await fetch(url, {
			"method": "GET",
			"mode": "no-cors",
			"headers": {
				"Accept": 'application/json',
				"Content-Type": 'application/json'
			}
		})

		let json = await respuesta.json();

		alert("hola");
	}

	buscarPeliculas();

	const cargarPeliculas = ()=>{
		peliculas= peliculas.slice((paginaActual -1) * Total_por_pagina, paginaActual*Total_por_pagina);
	}

	const getTotalPaginas = ()=>{
		let cantidaTotalDePaginas = peliculasJson.length;
		return Math.ceil(cantidaTotalDePaginas / Total_por_pagina);
	}

	cargarPeliculas();

	return (
		<div>
			<PageWrapper>
				{/* Aqui debe ir mi componenete */}
				{
					peliculas.map((pelicula) =>
						<Peliculas
							titulo={pelicula.titulo}
							rate={pelicula.rate}
							director={pelicula.director}
							actores={pelicula.actores}
							year={pelicula.year}
							fecha={pelicula.fecha}
							imgURL={pelicula.imgURL}
						>
							{pelicula.descripcion}
						</Peliculas>
					)
				}
				<Paginacion
					pagina={paginaActual}
					total={getTotalPaginas()}
					onChange={(pagina)=>{
						setPaginaActual(pagina);
					}}
				 />
			</PageWrapper>
		</div>
	);
}

export default App;
