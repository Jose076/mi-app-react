import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

const DetalleNota = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, eliminarNota } = useNotas();

  // Buscar la nota por ID
  const nota = notas.find(n => n.id === id);

  // Función para obtener el color de la categoría
  const getCategoriaColor = (categoria) => {
    const colores = {
      personal: '#e74c3c',
      trabajo: '#3498db',
      estudio: '#2ecc71',
      ideas: '#f39c12'
    };
    return colores[categoria] || '#95a5a6';
  };

  // Función para formatear la fecha
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Manejador para eliminar nota con confirmación
  const handleEliminar = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta nota?')) {
      eliminarNota(id);
      navigate('/notas');
    }
  };

  // Si la nota no existe, mostrar mensaje de error
  if (!nota) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🔍</div>
        <h2 style={{
          fontSize: '24px',
          color: '#2c3e50',
          marginBottom: '10px'
        }}>
          Nota no encontrada
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#6c757d',
          marginBottom: '20px'
        }}>
          La nota que buscas no existe o ha sido eliminada.
        </p>
        <Link
          to="/notas"
          style={{
            padding: '10px 30px',
            backgroundColor: '#3498db',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#2980b9';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#3498db';
          }}
        >
          Volver a notas
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Botón volver */}
      <div style={{ marginBottom: '20px' }}>
        <Link
          to="/notas"
          style={{
            padding: '8px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#5a6268';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#6c757d';
          }}
        >
          ← Volver a notas
        </Link>
      </div>

      {/* Detalle de la nota */}
      <div style={{
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: `2px solid ${nota.fijada ? '#ffc107' : '#dee2e6'}`,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        {/* Título y estado */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '15px'
        }}>
          <h1 style={{
            fontSize: '28px',
            color: '#2c3e50',
            margin: 0
          }}>
            {nota.fijada && '📌 '}
            {nota.titulo}
          </h1>
          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              padding: '4px 14px',
              borderRadius: '20px',
              backgroundColor: getCategoriaColor(nota.categoria),
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'capitalize'
            }}>
              {nota.categoria}
            </span>
            {nota.fijada && (
              <span style={{
                padding: '4px 14px',
                borderRadius: '20px',
                backgroundColor: '#fff3cd',
                color: '#856404',
                fontSize: '14px',
                fontWeight: 'bold',
                border: '1px solid #ffc107'
              }}>
                📌 Fijada
              </span>
            )}
          </div>
        </div>

        {/* Fecha de creación */}
        <div style={{
          marginBottom: '20px',
          padding: '10px 15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          fontSize: '14px',
          color: '#6c757d'
        }}>
          📅 Creada el: {formatearFecha(nota.fechaCreacion)}
        </div>

        {/* Contenido completo */}
        <div style={{
          marginBottom: '25px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          border: '1px solid #e9ecef',
          minHeight: '100px',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#2c3e50'
        }}>
          {nota.contenido}
        </div>

        {/* Botones de acción */}
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          borderTop: '1px solid #e9ecef',
          paddingTop: '20px'
        }}>
          <Link
            to={`/notas/${id}/editar`}
            style={{
              padding: '10px 25px',
              backgroundColor: '#17a2b8',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#138496';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#17a2b8';
            }}
          >
            ✏️ Editar
          </Link>
          
          <button
            onClick={handleEliminar}
            style={{
              padding: '10px 25px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#c82333';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#dc3545';
            }}
          >
            🗑️ Eliminar
          </button>
          
          <Link
            to="/notas"
            style={{
              padding: '10px 25px',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5a6268';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#6c757d';
            }}
          >
            📋 Ver todas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetalleNota;