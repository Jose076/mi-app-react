import React from "react";
import Clima from "./Clima";
import EstadoPedido from "./EstadoPedido";
import Perfil from "./Perfil.jsx";
import MensajeBienvenida from "./MensajeBienvenida.jsx"
import ListaHabilidades from "./ListaHabilidades.jsx"
import TablaProductos from "./TablaProductos.jsx"
import ListaTareas from "./ListaTareas.jsx"
import Tarjeta from "./Tarjeta.jsx"
import Dashboard from "./Dashboard.jsx"


function Lab2() {
  return (
    <div>
      <h1>Laboratorio 2</h1>
      <Perfil />
      <Clima />
      <EstadoPedido />
      <MensajeBienvenida />
      <ListaHabilidades />
      <TablaProductos />
      <ListaTareas />
      <Tarjeta />
      <Dashboard />
      
    </div>
  );
}

export default Lab2;