import React, { useContext,useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const DetalleDeVehiculos = () =>{

    const {store, actions}=useContext(Context);
    const {id, name} = useParams();
    const vehiculo=store.vehicle;
 
    
    useEffect(() => {
		actions.getOneVehicle(id);
	}, []);
    

    return (<>
    {/* <h1>Personajes</h1> */}
        <div className="detallesdecarta">
        <div className="d-flex">
            <img className="imagendetalle" src={(`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`)} alt=""></img>
            <div className="container-fluid">
            <h1 className="titulodetallecarta">{name}</h1>
            <div className="row">
        <div className="col-2">
          <p>Name</p>
          <span>{vehiculo.name}</span>
        </div>
        <div className="col-2">
          <p>Model</p>
          <span>{vehiculo.model}</span>
        </div>
        <div className="col-2">
          <p>Passengers</p>
          <span>{vehiculo.passengers}</span>
        </div>
        <div className="col-2">
          <p>Crew</p>
          <span>{vehiculo.crew}</span>
        </div>
        <div className="col-2">
          <p>Consumables</p>
          <span>{vehiculo.consumables}</span>
        </div>
        <div className="col-2">
          <p>Cargo Capacity</p>
          <span>{vehiculo.cargo_capacity}</span>
        </div>
      </div>
      </div>
    </div>
  </div>
        
        </>
    )

}