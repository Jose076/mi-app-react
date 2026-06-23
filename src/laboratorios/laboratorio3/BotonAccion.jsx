import React from 'react';

const BotonAccion = ({ 
  texto = 'Botón', 
  variante = 'primario', 
  disabled = false, 
  onClick 
}) => {
  const estilos = {
    primario: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      fontSize: '16px',
      transition: 'all 0.3s ease'
    },
    secundario: {
      backgroundColor: '#6c757d',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      fontSize: '16px',
      transition: 'all 0.3s ease'
    },
    peligro: {
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      fontSize: '16px',
      transition: 'all 0.3s ease'
    }
  };

  const estilosBoton = estilos[variante] || estilos.primario;

  return (
    <button 
      style={estilosBoton}
      disabled={disabled}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default BotonAccion;