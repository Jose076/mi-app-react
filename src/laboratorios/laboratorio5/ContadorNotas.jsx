import React from 'react';
import { useNotas } from './context/NotasContext.jsx';

const ContadorNotas = () => {
  const { notas } = useNotas();
  
  return (
    <div style={{
      padding: '15px',
      backgroundColor: '#e3f2fd',
      borderRadius: '8px',
      border: '2px solid #2196f3',
      marginBottom: '20px'
    }}>
      <h3>📊 Total de notas: {notas.length}</h3>
      <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#555' }}>
        Notas fijadas: {notas.filter(n => n.fijada).length}
      </p>
    </div>
  );
};

export default ContadorNotas;