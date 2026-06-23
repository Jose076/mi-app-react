import React, { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

const Contador = () => {
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(prev => prev + 1);
  };

  const decrementar = () => {
    setValor(prev => prev - 1);
  };

  const incrementarCinco = () => {
    setValor(prev => prev + 5);
  };

  const reiniciar = () => {
    setValor(0);
  };

  const estilos = {
    contenedor: {
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px 0',
      fontFamily: 'Arial, sans-serif'
    },
    valor: {
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '20px 0',
      color: '#333'
    },
    botones: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    alertas: {
      marginTop: '15px'
    }
  };

  return (
    <div style={estilos.contenedor}>
      <h3>Contador</h3>
      <div style={estilos.valor}>{valor}</div>
      <div style={estilos.botones}>
        <BotonAccion 
          texto="Decrementar" 
          variante="secundario" 
          disabled={valor === 0}
          onClick={decrementar}
        />
        <BotonAccion 
          texto="Incrementar" 
          variante="primario" 
          onClick={incrementar}
        />
        <BotonAccion 
          texto="Incrementar +5" 
          variante="primario" 
          onClick={incrementarCinco}
        />
        <BotonAccion 
          texto="Reiniciar" 
          variante="peligro" 
          onClick={reiniciar}
        />
      </div>
      <div style={estilos.alertas}>
        {valor === 0 && (
          <Alerta tipo="info" titulo="Contador en cero">
            <p>El contador está en cero</p>
          </Alerta>
        )}
        {valor > 10 && (
          <Alerta tipo="advertencia" titulo="¡Valor alto!">
            <p>¡Valor alto!</p>
          </Alerta>
        )}
      </div>
    </div>
  );
};

export default Contador;