import React from "react"

function Dashboard(){
    const usuario ={
        nombre:"Jose ariel",
        email:"jose@example.com",
        rol:"admin"
    };
    const notificaciones =[
        {id:1, mensaje:"Nueva tarea asignada",leida:false},
        {id:2, mensaje:"Actualizacion de Proyecto",leida:true},
        {id:3, mensaje:"Mensaje del Equipo",leida:false},
        {id:4, mensaje:"Revision Completada",leida:true},
    ];
    const actividadReciente =[
        {id:1, accion:"Login exitoso",fecha:"21/06/2026"},
        {id:2, accion:"Creo nueva tarea",fecha:"20/06/2026"},
        {id:3, accion:"Actulizo perfil",fecha:"19/06/2026"},
    ];
    const noLeidas = notificaciones.filter(n => !n.leida);
    return(
        <>
        <h1>Ejercicio9</h1>
        <section>
            <h2>Informacion del usuario</h2>
            <p>Nombre : {usuario.nombre}</p>
            <p>Email : {usuario.email}</p>
            <p>Rol : {usuario.rol}</p>
        </section>

        <section>
            <h2>({noLeidas.length}) notificaciones no leidas</h2>
            {noLeidas.length ===0 ? (
                <p>No tienes notificaciones pendientes</p>
            ):(
                <ul >
                    {notificaciones.map(n =>(
                        <li key={n.id} style={{fontWeight: n.leida ?"normal":"bold",opacity:n.leida ? 0.6 :1}}>
                            {n.mensaje}
                        </li>
                    ))}
                </ul>
            )
            }
        </section>
        <section>
            <h2>Actividad Reciente</h2>
            {actividadReciente.length ===0 ?(
                <p>No hay actividad reciente</p>
            ):(
                <ul>
                    {actividadReciente.map( a=>(
                        <li key={a.id}>
                            {a.accion}-{a.fecha}
                        </li>
                    ))}
                </ul>
            )}
        </section>

        </>
    );
}
export default Dashboard;