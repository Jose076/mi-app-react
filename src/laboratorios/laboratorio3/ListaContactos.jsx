import React, { useState } from 'react';
import Modal from './Modal';

const ListaContactos = () => {
  // Estado con al menos 5 contactos
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Juan Pérez', telefono: '555-1234', favorito: true },
    { id: 2, nombre: 'María García', telefono: '555-5678', favorito: false },
    { id: 3, nombre: 'Carlos López', telefono: '555-9012', favorito: false },
    { id: 4, nombre: 'Ana Martínez', telefono: '555-3456', favorito: true },
    { id: 5, nombre: 'Pedro Sánchez', telefono: '555-7890', favorito: false }
  ]);

  const [nuevoBusqueda, setNuevoBusqueda] = useState('');
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  // Filtrar contactos por búsqueda
  const contactosFiltrados = contactos.filter(contacto => {
    const busqueda = nuevoBusqueda.toLowerCase();
    const nombre = contacto.nombre.toLowerCase();
    const telefono = contacto.telefono.toLowerCase();
    return nombre.includes(busqueda) || telefono.includes(busqueda);
  });

  // Filtrar por favoritos si está activado
  const contactosMostrados = mostrarFavoritos 
    ? contactosFiltrados.filter(contacto => contacto.favorito)
    : contactosFiltrados;

  // Alternar favorito
  const toggleFavorito = (id) => {
    setContactos(prevContactos =>
      prevContactos.map(contacto =>
        contacto.id === id
          ? { ...contacto, favorito: !contacto.favorito }
          : contacto
      )
    );
  };

  // Eliminar contacto
  const eliminarContacto = () => {
    if (contactoAEliminar) {
      setContactos(prevContactos =>
        prevContactos.filter(contacto => contacto.id !== contactoAEliminar.id)
      );
      setContactoAEliminar(null);
    }
  };

  // Contar favoritos
  const totalFavoritos = contactos.filter(contacto => contacto.favorito).length;
  const totalContactos = contactos.length;
  const resultadosBusqueda = contactosMostrados.length;

  const estilos = {
    contenedor: {
      padding: '20px',
      maxWidth: '600px',
      margin: '20px 0',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
      flexWrap: 'wrap',
      gap: '10px'
    },
    input: {
      padding: '10px',
      width: '100%',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    contador: {
      padding: '10px',
      backgroundColor: '#e9ecef',
      borderRadius: '4px',
      marginBottom: '15px',
      fontSize: '14px'
    },
    contacto: {
      backgroundColor: 'white',
      padding: '12px 15px',
      marginBottom: '10px',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #e0e0e0',
      transition: 'all 0.2s'
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    },
    nombre: {
      fontWeight: 'bold',
      fontSize: '16px'
    },
    telefono: {
      color: '#666',
      fontSize: '14px'
    },
    acciones: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    },
    iconoFavorito: {
      fontSize: '24px',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      background: 'none',
      border: 'none',
      padding: '5px'
    },
    botonEliminar: {
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      padding: '6px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    botonFiltrar: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    }
  };

  return (
    <div style={estilos.contenedor}>
      <h3>📇 Lista de Contactos</h3>
      
      <div style={estilos.header}>
        <button 
          style={estilos.botonFiltrar}
          onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
        >
          {mostrarFavoritos ? '⭐ Mostrar Todos' : '⭐ Solo Favoritos'}
        </button>
      </div>

      <input
        type="text"
        placeholder="🔍 Buscar por nombre o teléfono..."
        value={nuevoBusqueda}
        onChange={(e) => setNuevoBusqueda(e.target.value)}
        style={estilos.input}
      />

      <div style={estilos.contador}>
        <strong>Favoritos:</strong> {totalFavoritos} de {totalContactos} | 
        <strong> Resultados:</strong> {resultadosBusqueda}
      </div>

      {contactosMostrados.length === 0 && (
        <Alerta tipo="info" titulo="Sin resultados">
          <p>No se encontraron contactos.</p>
        </Alerta>
      )}

      {contactosMostrados.map(contacto => (
        <div key={contacto.id} style={estilos.contacto}>
          <div style={estilos.info}>
            <span style={estilos.nombre}>{contacto.nombre}</span>
            <span style={estilos.telefono}>📞 {contacto.telefono}</span>
          </div>
          <div style={estilos.acciones}>
            <button
              style={estilos.iconoFavorito}
              onClick={() => toggleFavorito(contacto.id)}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              {contacto.favorito ? '⭐' : '☆'}
            </button>
            <button
              style={estilos.botonEliminar}
              onClick={() => setContactoAEliminar(contacto)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}

      {/* Modal de confirmación para eliminar */}
      {contactoAEliminar && (
        <Modal>
          <h3>⚠️ Confirmar Eliminación</h3>
          <p>¿Estás seguro de eliminar a <strong>{contactoAEliminar.nombre}</strong>?</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => setContactoAEliminar(null)}
            >
              Cancelar
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={eliminarContacto}
            >
              Eliminar
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ListaContactos;