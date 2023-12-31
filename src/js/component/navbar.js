import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




export const Navbar = () => {

	const {store, actions} =useContext(Context)
	const handleDeleteFavorites = (e, name) => {
        e.stopPropagation();
		const favs = store.favorites.filter((item)=> item.name !== name)
		actions.getFavorites(favs)
    };



	return (
		<nav className="navbar navbar-light mb-3">
           
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="logostarwars"src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="imagenStarWars"></img></span>
			</Link>
			<div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle bg-primary botonfavoritos"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >Favorites ({store.favorites.length})
                </button>
				<ul className="dropdown-menu dropdown-menu-end listaDesplFav">
                    {store.favorites.length === 0 ? (
                        <li className="dropdown-item">Empty</li>
                    ) : (
                        store.favorites.map((listafavoritos) => (
                            <li key={listafavoritos.id}>
                                <div className="item-container">
                                <Link
                                    className="link-fav"
                                    to={`/${listafavoritos.class}/${listafavoritos.id}/${listafavoritos.name}`}
                                >
                                    {listafavoritos.name}
                                </Link>

                                <button
                                    className="btn-fav"
                                    onClick={(e) =>handleDeleteFavorites(
                                            e, listafavoritos.name
                                        )
                                    }
                                >
                                    <i className="fa-solid fa-trash "></i>
                                </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};
