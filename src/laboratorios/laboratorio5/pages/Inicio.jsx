import React from 'react';
import { useNotas } from '../context/NotasContext.jsx';

const Inicio = () => {
  const { notas } = useNotas();

  // Calcular estadísticas
  const totalNotas = notas.length;
  const notasFijadas = notas.filter(n => n.fijada).length;
  
  // Contar notas por categoría
  const categorias = {};
  notas.forEach(nota => {
    categorias[nota.categoria] = (categorias[nota.categoria] || 0) + 1;
  });

  // Colores para las categorías
  const coloresCategoria = {
    personal: '#e74c3c',
    trabajo: '#3498db',
    estudio: '#2ecc71',
    ideas: '#f39c12'
  };

  return (
    <div>
      <h2 style={{
        fontSize: '28px',
        color: '#2c3e50',
        marginBottom: '10px'
      }}>
        👋 ¡Bienvenido a MisNotas!
      </h2>
      <p style={{
        fontSize: '16px',
        color: '#6c757d',
        marginBottom: '30px'
      }}>
        Tu gestor de notas personal. Organiza tus ideas, tareas y proyectos.
      </p>

      {/* Resumen rápido */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '5px' }}>📊</div>
          <div style={{ fontSize: '14px', color: '#6c757d' }}>Total de Notas</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50' }}>
            {totalNotas}
          </div>
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '5px' }}>📌</div>
          <div style={{ fontSize: '14px', color: '#6c757d' }}>Notas Fijadas</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50' }}>
            {notasFijadas}
          </div>
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '5px' }}>🏷️</div>
          <div style={{ fontSize: '14px', color: '#6c757d' }}>Categorías</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50' }}>
            {Object.keys(categorias).length}
          </div>
        </div>
      </div>

      {/* Detalle por categoría */}
      <div style={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #dee2e6',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{
          fontSize: '18px',
          color: '#2c3e50',
          marginTop: 0,
          marginBottom: '15px'
        }}>
          📊 Distribución por Categoría
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {Object.entries(categorias).map(([categoria, cantidad]) => (
            <div key={categoria} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{
                width: '100px',
                fontWeight: 'bold',
                color: '#2c3e50',
                textTransform: 'capitalize'
              }}>
                {categoria}
              </span>
              <div style={{
                flex: 1,
                height: '20px',
                backgroundColor: '#e9ecef',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  width: `${(cantidad / totalNotas) * 100}%`,
                  height: '100%',
                  backgroundColor: coloresCategoria[categoria] || '#95a5a6',
                  borderRadius: '10px',
                  transition: 'width 0.5s ease'
                }} />
                <span style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#495057'
                }}>
                  {cantidad}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;