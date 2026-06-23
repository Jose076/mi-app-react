import React, { useState } from 'react';

const Acordeon = ({ titulo = 'Título del acordeón', children }) => {
  const [expandido, setExpandido] = useState(false);

  const toggleExpandido = () => {
    setExpandido(!expandido);
  };

  const estilos = {
    contenedor: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      marginBottom: '10px',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      backgroundColor: '#f8f9fa',
      padding: '12px 15px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      userSelect: 'none'
    },
    titulo: {
      margin: 0,
      fontSize: '16px',
      fontWeight: '500'
    },
    indicador: {
      fontSize: '20px',
      transition: 'transform 0.3s ease'
    },
    contenido: {
      padding: expandido ? '15px' : '0 15px',
      maxHeight: expandido ? '500px' : '0',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      backgroundColor: '#fff'
    },
    contenidoInner: {
      padding: expandido ? '10px 0' : '0'
    }
  };

  const contenidoDefault = children || (
    <div>
      <p>Este es el contenido del acordeón.</p>
      <p>Haz clic en el título para expandir o colapsar.</p>
    </div>
  );

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.header} onClick={toggleExpandido}>
        <h3 style={estilos.titulo}>{titulo}</h3>
        <span style={estilos.indicador}>
          {expandido ? '▼' : '▶'}
        </span>
      </div>
      <div style={estilos.contenido}>
        <div style={estilos.contenidoInner}>
          {contenidoDefault}
        </div>
      </div>
    </div>
  );
};

export default Acordeon;