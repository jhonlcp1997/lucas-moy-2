import React from 'react';
import './App.css';
import { Peliculas } from './Peliculas';
import { PageWrapper } from './PageWrapper';
import peliculasJson from './peliculas.json';
import { Paginacion } from './Paginacion';
import { useEffect, useState } from 'react';

function ListadoPeliculas (){
	const [paginaActual, setPaginaActual] = useState(1);
	const [peliculasM, setPeliculasM] = useState([]);
	const Total_por_pagina = 4;

	useEffect(()=>{
		buscarPeliculas();
	}, []);


	const buscarPeliculas = async() =>{
		let url = 'https://lucasmoy.dev/data/react/peliculas.json';

		let respuesta = await fetch(url);

		let json = await respuesta.json();

		setPeliculasM(json);
		// debugger
	}

	let  peliculas_per_page= peliculasM.slice((paginaActual -1) * Total_por_pagina, paginaActual*Total_por_pagina);


	const getTotalPaginas = ()=>{
		let cantidaTotalDePaginas = peliculasM.length;
		return Math.ceil(cantidaTotalDePaginas / Total_por_pagina);
	}

	return (
		<div>
			<PageWrapper>
				{/* Aqui debe ir mi componenete */}
				{
					peliculas_per_page.map((pelicula) =>
						<Peliculas
							// key={pelicula.}
							titulo={pelicula.titulo}
							calificacion={pelicula.calificacion}
							director={pelicula.director}
							actores={pelicula.actores}
							fecha={pelicula.fecha}
							duracion={pelicula.duracion}
							img={pelicula.img}
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

export default ListadoPeliculas;
