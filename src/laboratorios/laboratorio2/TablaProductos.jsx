import React from "react";
function TablaProductos(){
    const productos =[
        {id:1, nombre:"laptop", precio:1200.5, disponibilidad:true},
        {id:2, nombre:"Mouse", precio:25, disponibilidad:true},
        {id:3, nombre:"Teclado", precio:45.99, disponibilidad:false},
        {id:4, nombre:"Monitor", precio:300, disponibilidad:true},
        {id:5, nombre:"Impresora", precio:150.75, disponibilidad:false},
    ];

    return(
        <div>
            <h1>Ejercicio6</h1>
            <table border ="1" cellPadding="8" style={{borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto)=>(
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio.toFixed(2)}</td>
                            <td style={{ color:producto.disponibilidad ? "green" :"red", fontWeight:"bold"}}>{producto.disponibilidad ? "Disponible" : "Agotado"}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TablaProductos;