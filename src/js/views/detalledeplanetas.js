import React, { useContext,useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const DetalleDePlanetas = () =>{

    const {store, actions}=useContext(Context);
    const {id, name} = useParams();
    const planeta=store.planet;

        
    useEffect(() => {
		actions.getOnePlanet(id);
	}, []);
    

    return (<>
    {/* <h1>Personajes</h1> */}
        <div>
        <div className="d-flex">
            <img src={(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`)} alt=""></img>
            <div className="container-fluid">
            <h1>{name}</h1>
            <div className="row">
        <div className="col-2">
          <p>Name</p>
          <span>{planeta.name}</span>
        </div>
        <div className="col-2">
          <p>Climate</p>
          <span>{planeta.climate}</span>
        </div>
        <div className="col-2">
          <p>Diameter</p>
          <span>{planeta.diameter}</span>
        </div>
        <div className="col-2">
          <p>Terrain</p>
          <span>{planeta.terrain}</span>
        </div>
        <div className="col-2">
          <p>Gravity</p>
          <span>{planeta.gravity}</span>
        </div>
        <div className="col-2">
          <p>Population</p>
          <span>{planeta.population}</span>
        </div>
      </div>
      </div>
    </div>
  </div>
        
        </>
    )

}












