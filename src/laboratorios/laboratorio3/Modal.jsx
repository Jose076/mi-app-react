import React, { useState } from 'react';
import BotonAccion from './BotonAccion';

const Modal = () => {
  const [abierto, setAbierto] = useState(false);

  if (!abierto) {
    return (
      <BotonAccion 
        texto="Abrir Modal" 
        variante="primario"
        onClick={() => setAbierto(true)}
      />
    );
  }

  const estilos = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    contenedor: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '90%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    titulo: {
      margin: '0 0 20px 0',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333'
    },
    contenido: {
      marginBottom: '20px'
    }
  };

  return (
    <div style={estilos.overlay}>
      <div style={estilos.contenedor}>
        <h2 style={estilos.titulo}>Modal de ejemplo</h2>
        <div style={estilos.contenido}>
          <p>Este es el contenido del modal.</p>
          <BotonAccion 
            texto="Cerrar Modal" 
            variante="secundario"
            onClick={() => setAbierto(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;