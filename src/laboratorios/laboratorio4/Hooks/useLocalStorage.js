import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Función para leer el valor de localStorage de forma lazy
  const readStoredValue = () => {
    // Si localStorage no está disponible (entorno de pruebas o servidor)
    if (typeof window === 'undefined' || !window.localStorage) {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      // Si existe el item, parsearlo
      if (item !== null) {
        return JSON.parse(item);
      }
      // Si no existe, devolver el valor inicial
      return initialValue;
    } catch (error) {
      // Manejar errores silenciosamente (datos corruptos)
      console.warn(`Error al leer localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // Estado inicial usando la función lazy
  const [storedValue, setStoredValue] = useState(readStoredValue);

  // Sincronizar con localStorage cuando cambie el valor o la clave
  useEffect(() => {
    // Si localStorage no está disponible
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }

    try {
      // Guardar en localStorage
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Manejar errores silenciosamente (cuota excedida, etc.)
      console.warn(`Error al guardar en localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  // Función setter que actualiza el estado y localStorage
  const setValue = (value) => {
    try {
      // Permitir que el valor sea una función (como useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.warn(`Error al actualizar localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;