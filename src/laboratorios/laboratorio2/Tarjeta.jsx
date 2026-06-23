import React from "react"

function Tarjeta( ){
    const datos = {
        titulo : "Curso React",
        descripcion : "Aprender a construir interfaces modernas con React",
        etiquetas : ["frontedd","JavaScript","UI","Componentes"],
        destacado : true,
    };
    return (
        <div style={{border: datos.destacado ?"2px solid #4caf50":"1px solid #ccc",backgroundColor: datos.destacado ? "#f9fff9" : "#fff",borderRadius:"8px",boxShadow:"0 2px 5px rgba(0,0,0,0.1)",padding:"16px",margin:"16px 0"}}>
            <h1>Ejercicio8</h1>
            <h3>{datos.titulo}</h3>
            <p>{datos.descripcion}</p>
            <div style={{marginTop:"8px"}}>
                {datos.etiquetas.map((etiqueta,index)=>(
                    <span key={index} style={{ display:"inline-block",background:"#e0e0e0",borderRadius:"12px",padding:"4px 10px",marginRight:"6px",fontSize:"o.9em"}}>
                        {etiqueta}
                    </span>
                ))}
            </div>
        </div>
    )
}
export default Tarjeta;