import React from 'react';
import VisorDocumento from './VisorDocumento.jsx';
import TemporizadorPomodoro from './TemporizadorPomodoro.jsx';
import ConfiguracionUsuario from './ConfiguracionUsuario.jsx';

function Lab4() {
  // Estilos comunes para los contenedores de ejercicios
  const ejercicioContainerStyle = {
    marginBottom: '40px',
    padding: '25px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e9ecef',
    transition: 'box-shadow 0.3s ease',
  };

  const tituloEjercicioStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '8px',
    paddingBottom: '10px',
    borderBottom: '3px solid #3498db',
    display: 'inline-block',
  };

  const subtituloStyle = {
    fontSize: '14px',
    color: '#7f8c8d',
    marginBottom: '20px',
    marginTop: '5px',
  };

  const separadorStyle = {
    border: 'none',
    height: '2px',
    background: 'linear-gradient(to right, #e9ecef, #dee2e6, #e9ecef)',
    margin: '50px 0',
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '30px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    }}>
      {/* Título principal */}
      <div style={{
        textAlign: 'center',
        marginBottom: '45px',
        padding: '30px 20px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e9ecef',
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '800',
          color: '#2c3e50',
          margin: '0 0 8px 0',
          letterSpacing: '-0.5px',
        }}>
          📚 Laboratorio 4
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6c757d',
          margin: '0',
        }}>
          Hooks y Efectos en React
        </p>
        <div style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}>
          <span style={{
            padding: '4px 12px',
            backgroundColor: '#e9ecef',
            borderRadius: '20px',
            fontSize: '12px',
            color: '#495057',
          }}>
            ⚛️ useState
          </span>
          <span style={{
            padding: '4px 12px',
            backgroundColor: '#e9ecef',
            borderRadius: '20px',
            fontSize: '12px',
            color: '#495057',
          }}>
            🔄 useEffect
          </span>
          <span style={{
            padding: '4px 12px',
            backgroundColor: '#e9ecef',
            borderRadius: '20px',
            fontSize: '12px',
            color: '#495057',
          }}>
            💾 Custom Hooks
          </span>
          <span style={{
            padding: '4px 12px',
            backgroundColor: '#e9ecef',
            borderRadius: '20px',
            fontSize: '12px',
            color: '#495057',
          }}>
            🗄️ localStorage
          </span>
        </div>
      </div>

      {/* ==================== EJERCICIO 1 ==================== */}
      <div style={ejercicioContainerStyle}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '5px',
        }}>
          <span style={{
            backgroundColor: '#3498db',
            color: 'white',
            fontWeight: 'bold',
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '14px',
          }}>
            Ejercicio 1
          </span>
          <h2 style={tituloEjercicioStyle}>
            Sincronización con el DOM
          </h2>
        </div>
        <p style={subtituloStyle}>
          🔄 El título de la pestaña se actualiza con el contador. Usa <strong>useEffect</strong> para sincronizar con <code>document.title</code>.
        </p>
        <VisorDocumento />
      </div>

      {/* Separador */}
      <hr style={separadorStyle} />

      {/* ==================== EJERCICIO 2 ==================== */}
      <div style={ejercicioContainerStyle}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '5px',
        }}>
          <span style={{
            backgroundColor: '#e67e22',
            color: 'white',
            fontWeight: 'bold',
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '14px',
          }}>
            Ejercicio 2
          </span>
          <h2 style={{
            ...tituloEjercicioStyle,
            borderBottomColor: '#e67e22',
          }}>
            Temporizador con Control de Intervalos
          </h2>
        </div>
        <p style={subtituloStyle}>
          ⏱️ Temporizador Pomodoro de 25 minutos con <strong>setInterval</strong>. Incluye limpieza de intervalos al desmontar o pausar.
        </p>
        <TemporizadorPomodoro />
      </div>

      {/* Separador */}
      <hr style={separadorStyle} />

      {/* ==================== EJERCICIO 3 y 4 ==================== */}
      <div style={ejercicioContainerStyle}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '5px',
          flexWrap: 'wrap',
        }}>
          <span style={{
            backgroundColor: '#27ae60',
            color: 'white',
            fontWeight: 'bold',
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '14px',
          }}>
            Ejercicios 3 y 4
          </span>
          <h2 style={{
            ...tituloEjercicioStyle,
            borderBottomColor: '#27ae60',
          }}>
            Persistencia con Custom Hooks
          </h2>
        </div>
        <p style={subtituloStyle}>
          💾 Persistencia manual con <strong>localStorage</strong> usando <strong>Custom Hooks</strong> (<code>useLocalStorage</code> y <code>useNotificacion</code>).
        </p>
        <ConfiguracionUsuario />
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '50px',
        padding: '20px',
        textAlign: 'center',
        borderTop: '2px solid #e9ecef',
        color: '#6c757d',
        fontSize: '14px',
      }}>
        <p style={{ margin: '0' }}>
          🚀 Laboratorio 4 - Ejercicios de Hooks en React
        </p>
        <p style={{ margin: '5px 0 0 0', fontSize: '12px' }}>
          Desarrollado con React • useState • useEffect • Custom Hooks • localStorage
        </p>
      </div>
    </div>
  );
}

export default Lab4;