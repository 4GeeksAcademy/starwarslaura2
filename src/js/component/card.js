import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { CardGroup } from "./cardgroup";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



export const Card = props => {
	const { store, actions } = useContext(Context)
    const {id, name} = useParams();
    const personaje=store.character;  
    const [favoritos, setFavoritos]= useState(false);

    const handleClick=e=>{
        e.preventDefault()
        let favoritosClic=[...store.favorites];
        setFavoritos(!favoritos)

        if(!favoritos === true) {
            favoritosClic.push ({
            name: props.name,
            id: props.uid,
        })

    } else (
        favoritosClic = favoritosClic.filter((item) => item.name !== props.name)
        )
     
    actions.getFavorites(favoritosClic)

}
    
useEffect(() => {
    const isFavorito = store.favorites.some((favorite) => favorite.name === props.name);
    setFavoritos(isFavorito);
    
}, [store.favorites]);
    

    return (
    <div className="card carta">
        <img src={(`https://starwars-visualguide.com/assets/img/${props.parametroseccion}/${props.id}.jpg`)} alt={(`${props.name}`)}/>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <button className="learnMore">
        <Link to={props.parametroespecial+props.id+"/"+props.name} className="linkLearnMore">Learn More! </Link></button>
       <button onClick={handleClick} className="like"> 
       {
         (favoritos) ? <i className="fa-sharp fa-solid fa-heart heart fa-lg"></i>: <i className="fa-sharp fa-regular fa-heart heart fa-lg"></i>
                    }
       </button>
        </div>
  </div>)
  
}
Card.propTypes = {
    parametroespecial: PropTypes.string,
	name: PropTypes.string,
    caracteristicas: PropTypes.object,
    id: PropTypes.string,
    parametroseccion: PropTypes.string,
}
