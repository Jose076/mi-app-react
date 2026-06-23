import React from "react";

function ListaTareas() {
    const tareas =[
        {id:1,titulo:"Estudiar React", completada:false,prioridad:"alta"},
        {id:2,titulo:"Practicar Css", completada:true,prioridad:"media"},
        {id:3,titulo:"Configurar Node.js", completada:false,prioridad:"media"},
        {id:4,titulo:"Usar Git", completada:true,prioridad:"baja"},
        {id:5,titulo:"Aprender TypeScript", completada:false,prioridad:"alta"},
        {id:6,titulo:"Revisar JavaScript", completada:true,prioridad:"alta"},
        {id:7,titulo:"Hacer proyecto final", completada:false,prioridad:"baja"},
    ]

    const pendientes = tareas.filter(t => !t.completada);
    const completadas = tareas.filter(t => t.completada);

    return(
        <div>
            <h1>Ejercicio7</h1>
            <h2>Tareas pendientes ({pendientes.length})</h2>
            {pendientes.length === 0 ? (
                <p>No hay tareas pendientes</p>
            ) :(
                <ul>
                    {pendientes.map(t =>(
                        <li key={t.id}>
                            {t.titulo}{" "}
                            <span style={{color:t.prioridad ==="alta"?"red":"black",fontWeight: t.prioridad==="alta"?"bold":"normal"}}>
                                [{t.prioridad}]
                            </span>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Tareas completadas ({completadas.length})</h2>
            {completadas.length ===0 ?(
                <p>No hay tareas completadas</p>
            ):(
                <ul>
                    {completadas.map(t =>(
                        <li key={t.id} style={{textDecoration:"line-through"}}>
                            {t.titulo} [{t.prioridad}]
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default ListaTareas;