import React from 'react';

const Alerta = ({ tipo = 'info', titulo = 'Información', children }) => {
  
  const configuracion = {
    exito: {
      icono: '✅',
      color: '#d4edda',
      borde: '#155724',
      colorTexto: '#155724'
    },
    advertencia: {
      icono: '⚠️',
      color: '#fff3cd',
      borde: '#856404',
      colorTexto: '#856404'
    },
    error: {
      icono: '❌',
      color: '#f8d7da',
      borde: '#721c24',
      colorTexto: '#721c24'
    },
    info: {
      icono: 'ℹ️',
      color: '#d1ecf1',
      borde: '#0c5460',
      colorTexto: '#0c5460'
    }
  };

  const { icono, color, borde, colorTexto } = configuracion[tipo] || configuracion.info;

  const estilos = {
    contenedor: {
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '5px',
      backgroundColor: color,
      borderLeft: `4px solid ${borde}`,
      color: colorTexto,
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: 'bold',
      fontSize: '18px'
    },
    contenido: {
      marginTop: '10px',
      paddingLeft: '35px'
    }
  };

  const contenidoDefault = children || (
    <div>
      <p>Este es un mensaje de {tipo}.</p>
      <p>Puedes personalizar el contenido pasando children al componente.</p>
    </div>
  );

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.header}>
        <span>{icono}</span>
        <span>{titulo}</span>
      </div>
      <div style={estilos.contenido}>
        {contenidoDefault}
      </div>
    </div>
  );
};

export default Alerta;