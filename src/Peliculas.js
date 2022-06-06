import React from 'react'

// *Peliculas extend App
// *recive estructura Movies visual
export const Peliculas = (props) => {
	return (
		<div className="movie-item-style-2">
			<img src={props.imgURL} alt="" />
			<div className="mv-item-infor">
				<h6><a href="moviesingle.html">{props.titulo}<span>{props.year}</span></a></h6>
				<p className="rate"><i className="ion-android-star"></i><span>{props.rate}</span> /10</p>
				<p className="describe">{props.children}</p>
				<p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: {props.fecha}</span></p>
				<p>Director: <a href="#">{props.director}</a></p>
				<p>Stars: <a href="#">{props.actores},</a></p>
			</div>
		</div>
	)
}
