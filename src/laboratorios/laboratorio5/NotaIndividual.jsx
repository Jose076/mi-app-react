import React, { useState } from 'react';
import { useNotas } from './context/NotasContext';

const NotaIndividual = ({ nota }) => {
  const { eliminarNota, toggleFijada, editarNota } = useNotas();
  const [editando, setEditando] = useState(false);
  const [tituloEdit, setTituloEdit] = useState(nota.titulo);
  const [contenidoEdit, setContenidoEdit] = useState(nota.contenido);
  const [categoriaEdit, setCategoriaEdit] = useState(nota.categoria);

  const handleGuardarEdicion = () => {
    editarNota(nota.id, {
      titulo: tituloEdit,
      contenido: contenidoEdit,
      categoria: categoriaEdit
    });
    setEditando(false);
  };

  const getCategoriaColor = (categoria) => {
    const colores = {
      personal: '#e74c3c',
      trabajo: '#3498db',
      estudio: '#2ecc71',
      ideas: '#f39c12'
    };
    return colores[categoria] || '#95a5a6';
  };

  return (
    <div style={{
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: nota.fijada ? '#fff3cd' : 'white',
      borderRadius: '8px',
      border: `2px solid ${nota.fijada ? '#ffc107' : '#dee2e6'}`,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease'
    }}>
      {editando ? (
        // Modo edición
        <div>
          <input
            type="text"
            value={tituloEdit}
            onChange={(e) => setTituloEdit(e.target.value)}
            placeholder="Título"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ced4da',
              boxSizing: 'border-box'
            }}
          />
          <textarea
            value={contenidoEdit}
            onChange={(e) => setContenidoEdit(e.target.value)}
            placeholder="Contenido"
            rows="3"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ced4da',
              boxSizing: 'border-box'
            }}
          />
          <select
            value={categoriaEdit}
            onChange={(e) => setCategoriaEdit(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ced4da',
              boxSizing: 'border-box'
            }}
          >
            <option value="personal">Personal</option>
            <option value="trabajo">Trabajo</option>
            <option value="estudio">Estudio</option>
            <option value="ideas">Ideas</option>
          </select>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleGuardarEdicion}
              style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Guardar
            </button>
            <button
              onClick={() => setEditando(false)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        // Modo visualización
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 5px 0' }}>
                {nota.fijada && '📌 '}
                {nota.titulo}
              </h3>
              <p style={{ margin: '0 0 10px 0', color: '#555' }}>
                {nota.contenido}
              </p>
            </div>
            <span style={{
              padding: '2px 10px',
              borderRadius: '12px',
              backgroundColor: getCategoriaColor(nota.categoria),
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold',
              marginLeft: '10px'
            }}>
              {nota.categoria}
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '10px'
          }}>
            <button
              onClick={() => toggleFijada(nota.id)}
              style={{
                padding: '5px 12px',
                backgroundColor: nota.fijada ? '#ffc107' : '#e9ecef',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              {nota.fijada ? '📌 Desfijar' : '📌 Fijar'}
            </button>
            <button
              onClick={() => setEditando(true)}
              style={{
                padding: '5px 12px',
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              ✏️ Editar
            </button>
            <button
              onClick={() => eliminarNota(nota.id)}
              style={{
                padding: '5px 12px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              🗑️ Eliminar
            </button>
          </div>
          
          <div style={{
            marginTop: '8px',
            fontSize: '11px',
            color: '#6c757d'
          }}>
            {new Date(nota.fechaCreacion).toLocaleDateString()} {new Date(nota.fechaCreacion).toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotaIndividual;