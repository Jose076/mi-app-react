import React, { useState, useEffect } from 'react';

function VisorDocumento() {
  const [contador, setContador] = useState(0);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  // Efecto para actualizar el título del documento
  useEffect(() => {
    // Actualizar el título con el valor actual del contador
    document.title = `Contador: ${contador} - Mi App`;

    // Función de limpieza que se ejecuta al desmontar el componente
    return () => {
      document.title = 'Mi App';
    };
  }, [contador]); // El efecto se ejecuta cuando cambia el contador

  // Funciones para incrementar y decrementar
  const incrementar = () => {
    setContador(prev => prev + 1);
  };

  const decrementar = () => {
    setContador(prev => prev - 1);
  };

  // Función para simular desmontaje
  const simularDesmontaje = () => {
    setMostrarComponente(false);
  };

  // Si el componente está oculto, no renderizar nada
  if (!mostrarComponente) {
    return null;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Visor de Documento</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Contador: {contador}</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={decrementar} 
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Decrementar
        </button>
        <button 
          onClick={incrementar} 
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Incrementar
        </button>
        <button 
          onClick={simularDesmontaje} 
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Simular desmontaje
        </button>
      </div>
    </div>
  );
}

export default VisorDocumento;