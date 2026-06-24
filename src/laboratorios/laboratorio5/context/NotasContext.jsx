import React, { createContext, useReducer, useContext } from 'react';

// Crear el contexto
const NotasContext = createContext(null);

// Estado inicial con 5 notas precargadas
const estadoInicial = {
  notas: [
    {
      id: Date.now().toString() + '1',
      titulo: 'Reunión de equipo',
      contenido: 'Preparar presentación para la reunión del viernes',
      categoria: 'trabajo',
      fijada: true,
      fechaCreacion: new Date().toISOString()
    },
    {
      id: (Date.now() + 1).toString() + '2',
      titulo: 'Estudiar React Hooks',
      contenido: 'Repasar useEffect, useState y Custom Hooks',
      categoria: 'estudio',
      fijada: true,
      fechaCreacion: new Date().toISOString()
    },
    {
      id: (Date.now() + 2).toString() + '3',
      titulo: 'Comprar regalo de cumpleaños',
      contenido: 'Recordar comprar regalo para el sábado',
      categoria: 'personal',
      fijada: false,
      fechaCreacion: new Date().toISOString()
    },
    {
      id: (Date.now() + 3).toString() + '4',
      titulo: 'Idea para nuevo proyecto',
      contenido: 'Desarrollar una app de seguimiento de hábitos',
      categoria: 'ideas',
      fijada: false,
      fechaCreacion: new Date().toISOString()
    },
    {
      id: (Date.now() + 4).toString() + '5',
      titulo: 'Revisar documentos del cliente',
      contenido: 'Revisar contrato y hacer anotaciones',
      categoria: 'trabajo',
      fijada: false,
      fechaCreacion: new Date().toISOString()
    }
  ],
  filtroCategoria: 'todas',
  busqueda: ''
};

// Reducer para manejar las acciones
const notasReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_NOTA': {
      const nuevaNota = {
        ...action.payload,
        id: Date.now().toString(),
        fechaCreacion: new Date().toISOString()
      };
      return {
        ...state,
        notas: [nuevaNota, ...state.notas]
      };
    }

    case 'ELIMINAR_NOTA': {
      return {
        ...state,
        notas: state.notas.filter(nota => nota.id !== action.payload)
      };
    }

    case 'EDITAR_NOTA': {
      return {
        ...state,
        notas: state.notas.map(nota =>
          nota.id === action.payload.id
            ? { ...nota, ...action.payload.datos }
            : nota
        )
      };
    }

    case 'TOGGLE_FIJADA': {
      return {
        ...state,
        notas: state.notas.map(nota =>
          nota.id === action.payload
            ? { ...nota, fijada: !nota.fijada }
            : nota
        )
      };
    }

    case 'CAMBIAR_FILTRO': {
      return {
        ...state,
        filtroCategoria: action.payload
      };
    }

    case 'CAMBIAR_BUSQUEDA': {
      return {
        ...state,
        busqueda: action.payload
      };
    }

    default:
      return state;
  }
};

// Provider del contexto
export const NotasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notasReducer, estadoInicial);

  // Funciones de acción con nombres descriptivos
  const agregarNota = (nota) => {
    dispatch({ type: 'AGREGAR_NOTA', payload: nota });
  };

  const eliminarNota = (id) => {
    dispatch({ type: 'ELIMINAR_NOTA', payload: id });
  };

  const editarNota = (id, datos) => {
    dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } });
  };

  const toggleFijada = (id) => {
    dispatch({ type: 'TOGGLE_FIJADA', payload: id });
  };

  const cambiarFiltro = (categoria) => {
    dispatch({ type: 'CAMBIAR_FILTRO', payload: categoria });
  };

  const cambiarBusqueda = (texto) => {
    dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: texto });
  };

  const value = {
    ...state,
    agregarNota,
    eliminarNota,
    editarNota,
    toggleFijada,
    cambiarFiltro,
    cambiarBusqueda
  };

  return (
    <NotasContext.Provider value={value}>
      {children}
    </NotasContext.Provider>
  );
};

// Hook personalizado useNotas
export const useNotas = () => {
  const context = useContext(NotasContext);
  if (!context) {
    throw new Error('useNotas debe ser usado dentro de un NotasProvider');
  }
  return context;
};