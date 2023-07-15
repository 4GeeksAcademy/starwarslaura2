import React, { useContext,useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const DetalleDePlanetas = ()=>{
  
    const {store, actions}=useContext(Context);
    const {id, name} = useParams();
    const planeta=store.planet;

        
    useEffect(() => {
		actions.getOnePlanet(id);
	}, []);

    return (<>
        <div>
        <div className="d-flex">
            <img src="https://picsum.photos/200/300" alt=""></img>
            <div className="container-fluid">
            <h1>{name}</h1>
            <div className="row">
        
      </div>
         </div>
        </div>
        </div>
        
        </>
    )

}
