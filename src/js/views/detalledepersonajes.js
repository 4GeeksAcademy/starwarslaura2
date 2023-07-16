import React, { useContext,useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const DetalleDePersonajes = () =>{

    const {store, actions}=useContext(Context);
    const {id, name} = useParams();
    const personaje=store.character;
 
    
    useEffect(() => {
		actions.getOneCharacter(id);
	}, []);
    

    return (<>
    {/* <h1>Personajes</h1> */}
        <div className="detallesdecarta">
        <div className="d-flex">
            <img className="imagendetalle"  src={(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)} alt=""></img>
            <div className="container-fluid">
            <h1 className="titulodetallecarta">{name}</h1>
            <div className="row">
        <div className="col-2">
          <p>Name</p>
          <span>{personaje.name}</span>
        </div>
        <div className="col-2">
          <p>Birth Year</p>
          <span>{personaje.birth_year}</span>
        </div>
        <div className="col-2">
          <p>Gender</p>
          <span>{personaje.gender}</span>
        </div>
        <div className="col-2">
          <p>Height</p>
          <span>{personaje.height}</span>
        </div>
        <div className="col-2">
          <p>Skin Colour</p>
          <span>{personaje.skin_color}</span>
        </div>
        <div className="col-2">
          <p>Eye Colour</p>
          <span>{personaje.eye_color}</span>
        </div>
      </div>
      </div>
    </div>
  </div>
        
        </>
    )

}