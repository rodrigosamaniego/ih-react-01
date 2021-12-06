// 1 IMPORTACIONES 
import React from "react";
// 2 FUNCIÓN
function Header(props) {
    console.log(props)
    return(
        <p>Soy el header {props.nombre} de {props.ciudad} </p>
    )
}
// EXPORTACIIÓN
export default Header