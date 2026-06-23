import React from "react"

function ListaHabilidades(){
    const habilidades =["React","Java","JavaScript","Css","Git","Node.js",];

    return(
        <div>
            <h1>Ejercicio5</h1>
            <h2>Habilidades tecnicas</h2>
            <p>Total de habilidades {habilidades.length}</p>
            <ul>
                {habilidades.map((habilidad,index)=>(
                    <li key={index}>{habilidad}</li>
                ))}
            </ul>
        </div>
    );
}
export default ListaHabilidades;