import { useState, useEffect, useCallback } from 'react';

function useNotificacion(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  // Función para mostrar una notificación
  const mostrar = useCallback((mensaje, tipo = 'info') => {
    // Crear una nueva notificación con ID único
    const nuevaNotificacion = {
      id: Date.now() + Math.random(),
      mensaje,
      tipo
    };

    // Limpiar el timeout anterior si existe
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    // Establecer la nueva notificación
    setNotificacion(nuevaNotificacion);
  }, [timeoutId]);

  // Función para cerrar la notificación manualmente
  const cerrar = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setNotificacion(null);
  }, [timeoutId]);

  // Efecto para manejar el timeout automático
  useEffect(() => {
    // Si no hay notificación, no hacer nada
    if (!notificacion) {
      return;
    }

    // Configurar timeout para ocultar la notificación después de la duración
    const id = setTimeout(() => {
      setNotificacion(null);
      setTimeoutId(null);
    }, duracion);

    // Guardar el ID del timeout
    setTimeoutId(id);

    // Función de limpieza: cancelar el timeout si:
    // - El componente se desmonta
    // - Se muestra una nueva notificación antes de que expire la anterior
    // - La notificación se cierra manualmente
    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [notificacion, duracion]);

  return {
    notificacion,
    mostrar,
    cerrar
  };
}

export default useNotificacion;