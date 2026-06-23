import React from "react";

function EstadoPedido(){
    const estado = "enviado";

    return(
        <div>
            <p>{estado === "pendiente" ? "⏳ Tu pedido está siendo procesado" :
                estado === "enviado" ? "🚚 Tu pedido está en camino" :
                estado === "entregado" ? "✅ Tu pedido ha sido entregado" :
                "❌ Tu pedido fue cancelado"}
            </p>
            {estado === "enviado" && (
                <p>Tiempo estimado de entrega: 2-3 días hábiles</p>
            )}
        </div>
    )
}
export default EstadoPedido;