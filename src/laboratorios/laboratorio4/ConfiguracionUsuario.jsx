import React from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import useNotificacion from './Hooks/useNotificacion';

function ConfiguracionUsuario() {
  // Usar useLocalStorage en lugar de useState + useEffect manual
  const STORAGE_KEY = 'config-usuario';
  const valoresPorDefecto = {
    nombre: '',
    tema: 'claro',
    notificaciones: true
  };

  const [configuracion, setConfiguracion] = useLocalStorage(STORAGE_KEY, valoresPorDefecto);

  // Usar useNotificacion para mostrar mensajes
  const { notificacion, mostrar, cerrar } = useNotificacion(4000);

  // Manejadores de cambios para cada campo
  const handleNombreChange = (e) => {
    setConfiguracion(prev => ({
      ...prev,
      nombre: e.target.value
    }));
  };

  const handleTemaChange = (e) => {
    setConfiguracion(prev => ({
      ...prev,
      tema: e.target.value
    }));
  };

  const handleNotificacionesChange = (e) => {
    setConfiguracion(prev => ({
      ...prev,
      notificaciones: e.target.checked
    }));
  };

  // Función para restablecer valores
  const restablecerValores = () => {
    try {
      // Restablecer a valores por defecto
      setConfiguracion(valoresPorDefecto);
      // Mostrar notificación de éxito
      mostrar('Valores restablecidos correctamente', 'exito');
    } catch (error) {
      console.error('Error al restablecer valores:', error);
      mostrar('Error al restablecer los valores', 'error');
    }
  };

  // Obtener la vista previa como JSON formateado
  const obtenerVistaPrevia = () => {
    try {
      return JSON.stringify(configuracion, null, 2);
    } catch (error) {
      return 'Error al formatear la vista previa';
    }
  };

  // Estilos para los diferentes tipos de notificación
  const getNotificacionStyle = (tipo) => {
    const estilos = {
      info: { backgroundColor: '#4dabf7', color: 'white' },
      exito: { backgroundColor: '#51cf66', color: 'white' },
      error: { backgroundColor: '#ff6b6b', color: 'white' },
      advertencia: { backgroundColor: '#ffd43b', color: '#333' }
    };
    return estilos[tipo] || estilos.info;
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      maxWidth: '500px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <h2>Configuración de Usuario</h2>

      {/* Notificación */}
      {notificacion && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '15px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000,
          maxWidth: '400px',
          animation: 'slideIn 0.3s ease-out',
          ...getNotificacionStyle(notificacion.tipo)
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{notificacion.mensaje}</span>
            <button
              onClick={cerrar}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: '18px',
                marginLeft: '15px',
                padding: '0 5px'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Formulario */}
      <form style={{ textAlign: 'left' }}>
        {/* Campo: Nombre */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Nombre:
          </label>
          <input
            type="text"
            value={configuracion.nombre}
            onChange={handleNombreChange}
            placeholder="Ingresa tu nombre"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Campo: Tema */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Tema:
          </label>
          <select
            value={configuracion.tema}
            onChange={handleTemaChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              boxSizing: 'border-box'
            }}
          >
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
          </select>
        </div>

        {/* Campo: Notificaciones */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={configuracion.notificaciones}
              onChange={handleNotificacionesChange}
              style={{ marginRight: '8px' }}
            />
            <span>Activar notificaciones</span>
          </label>
        </div>
      </form>

      {/* Botón Restablecer */}
      <button
        onClick={restablecerValores}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff6b6b',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px',
          width: '100%'
        }}
      >
        Restablecer valores
      </button>

      {/* Vista previa en tiempo real */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        border: '1px solid #ddd'
      }}>
        <h3 style={{ marginTop: '0', fontSize: '16px', color: '#495057' }}>
          Vista previa (JSON):
        </h3>
        <pre style={{
          backgroundColor: '#e9ecef',
          padding: '10px',
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '14px',
          margin: '10px 0 0 0',
          textAlign: 'left'
        }}>
          {obtenerVistaPrevia()}
        </pre>
      </div>

      {/* Indicador de estado de guardado */}
      <div style={{
        marginTop: '10px',
        fontSize: '12px',
        color: '#6c757d'
      }}>
        <span>💾 Guardado automáticamente en localStorage</span>
      </div>

      {/* Estilos para la animación de notificación */}
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
}

export default ConfiguracionUsuario;