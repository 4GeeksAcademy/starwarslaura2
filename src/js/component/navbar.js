import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const Navbar = () => {

	const {store, actions} =useContext(Context)
	
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="logostarwars"src="https://www.teleadhesivo.com/es/img/as556-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-borde.jpg" alt="imagenStarWars"></img></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					{/* <button className="btn btn-primary">Favorites</button>
					 */}
					 <ul className="nav nav-tabs">
					 <li className="nav-item dropdown">
						<button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites {store.favorites.length}</button>
							<ul className="dropdown-menu">
							<li className="dropdown-item" href="#">Action</li>
							</ul>
							</li>
							</ul>
				</Link>
			</div>
		</nav>
	);
};
