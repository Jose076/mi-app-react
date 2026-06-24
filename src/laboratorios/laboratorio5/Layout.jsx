import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useNotas } from './context/NotasContext';
import useNotificacion from 'C:/Users/josea/Desktop/Proyecto_Web/mi-app-react/src/laboratorios/laboratorio4/Hooks/useNotificacion';

const Layout = () => {
  const { notas } = useNotas();
  const { notificacion, cerrar } = useNotificacion(4000);

  // Estilos para los enlaces activos
  const activeStyle = {
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#2980b9',
    borderRadius: '8px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ecf0f1',
    padding: '10px 20px',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    borderRadius: '8px'
  };

  // Estilos para diferentes tipos de notificación
  const getNotificacionStyle = (tipo) => {
    const estilos = {
      info: { backgroundColor: '#3498db', color: 'white' },
      exito: { backgroundColor: '#27ae60', color: 'white' },
      error: { backgroundColor: '#e74c3c', color: 'white' },
      advertencia: { backgroundColor: '#f39c12', color: 'white' }
    };
    return estilos[tipo] || estilos.info;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f5f6fa'
    }}>
      {/* Notificación Toast */}
      {notificacion && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '15px 25px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 9999,
          maxWidth: '400px',
          animation: 'slideIn 0.3s ease-out',
          ...getNotificacionStyle(notificacion.tipo),
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <span style={{ flex: 1 }}>{notificacion.mensaje}</span>
          <button
            onClick={cerrar}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: '20px',
              padding: '0 5px',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.8'}
          >
            ✕
          </button>
        </div>
      )}

      {/* Header */}
      <header style={{
        backgroundColor: '#2c3e50',
        borderBottom: '3px solid #3498db',
        padding: '15px 30px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '800',
            color: '#ecf0f1',
            margin: 0,
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}>
            📝 MisNotas
          </h1>

          {/* Navegación */}
          <nav style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeStyle : {})
              })}
            >
              🏠 Inicio
            </NavLink>
            <NavLink
              to="/notas"
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeStyle : {})
              })}
            >
              📋 Notas
            </NavLink>
            <NavLink
              to="/notas/nueva"
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeStyle : {})
              })}
            >
              ➕ Nueva Nota
            </NavLink>
          </nav>
        </div>

        {/* Contador de notas */}
        <div style={{
          maxWidth: '1200px',
          margin: '10px auto 0',
          padding: '8px 15px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <span style={{ fontSize: '14px', color: '#bdc3c7' }}>
            📊 Total: <strong style={{ color: '#ecf0f1' }}>{notas.length}</strong>
          </span>
          <span style={{ fontSize: '14px', color: '#bdc3c7' }}>
            📌 Fijadas: <strong style={{ color: '#ecf0f1' }}>{notas.filter(n => n.fijada).length}</strong>
          </span>
          <span style={{ fontSize: '14px', color: '#bdc3c7' }}>
            🏷️ Categorías: <strong style={{ color: '#ecf0f1' }}>{new Set(notas.map(n => n.categoria)).size}</strong>
          </span>
        </div>
      </header>

      {/* Contenido principal */}
      <main style={{
        flex: 1,
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '30px 20px'
      }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        borderTop: '3px solid #3498db',
        padding: '15px 30px',
        textAlign: 'center',
        color: '#bdc3c7',
        fontSize: '14px'
      }}>
        <p style={{ margin: 0 }}>
          © 2026 MisNotas - Todos los derechos reservados
        </p>
      </footer>

      {/* Estilos para animación */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;