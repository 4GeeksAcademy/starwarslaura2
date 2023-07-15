import React from "react";
import { Params, useParams } from "react-router";

export const DetalleDeVehiculos = ()=>{
    const {id, name} = useParams();
    return (<>
        <h1>Vehiculos</h1>
        </>
    )

}