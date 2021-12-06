// 1 Importaciones
import React from "react";

//2. Exportación de función
export default function Movies(props){
    const list = props.list
    

    return (
        <>
        {
            list.map((e, index)=>{
                return (
                    <article key={index}>
                    <p>Película: {e.titulo}. Director: {e.director}</p>
                    </article>
                )
            })
        }
        </>

    )
}