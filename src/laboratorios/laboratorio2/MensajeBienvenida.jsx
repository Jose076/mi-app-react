import React from "react";

function MensajeBienvenida() {
  const usuario ={
    nombre : "jose",
    rol:"admin"
  };
  if (usuario === null)
            return (
                <div>
                    <h1>Ejercicio4</h1>
                    <p>Por favor, inicia sesión para continuar</p>
                </div>
            );
  return (
    <div>
        <h1>Ejercicio 4</h1>
        <h2>Bienvenido, {usuario.nombre}</h2>
        <p>Rol: {usuario.rol}</p>
        {usuario.rol === "admin" && (
        <p>Tienes acceso completo al sistema</p>
        )}
    </div>
  );
}

export default MensajeBienvenida;