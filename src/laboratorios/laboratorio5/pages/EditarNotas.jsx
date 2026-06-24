import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../FormularioNota';

const EditarNota = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, editarNota } = useNotas();

  // Buscar la nota por ID
  const nota = notas.find(n => n.id === id);

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
          La nota que intentas editar no existe o ha sido eliminada.
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

  const handleSubmit = (datosNota) => {
    editarNota(id, datosNota);
    navigate(`/notas/${id}`);
  };

  const handleCancel = () => {
    navigate(`/notas/${id}`);
  };

  return (
    <FormularioNota
      notaInicial={nota}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      botonTexto="Actualizar Nota"
      titulo="✏️ Editar Nota"
    />
  );
};

export default EditarNota;