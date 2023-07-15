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
    

    return (
    <div className="card carta">
        <img src="https://picsum.photos/200/300"  alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <button className="learnMore">
        <Link to={props.parametroespecial+props.id+"/"+props.name} className="linkLearnMore">Learn More! </Link></button>
       <button className="like"> <i class="fa-regular fa-heart"></i>
       <img className="like" src="https://w7.pngwing.com/pngs/433/468/png-transparent-white-heart-shape-illustration-heart-outline-wedding-hearts-love-angle-white-thumbnail.png"></img> 
       {/* <img className="like" src="https://fontawesome.com/icons/heart?f=classic&s=regular"></img>  */}
       </button>
        </div>
  </div>)
  
}
Card.propTypes = {
    parametroespecial: PropTypes.string,
	name: PropTypes.string,
    caracteristicas: PropTypes.object,
    id: PropTypes.string
}
