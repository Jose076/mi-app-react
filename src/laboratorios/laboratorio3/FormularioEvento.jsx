import React, { useState, useEffect } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

const FormularioEvento = () => {
  // Estado del formulario
  const [formulario, setFormulario] = useState({
    titulo: '',
    fecha: '',
    categoria: '',
    descripcion: '',
    esPublico: false
  });

  // Estado de errores
  const [errores, setErrores] = useState({
    titulo: '',
    fecha: '',
    categoria: '',
    descripcion: ''
  });

  // Estado de confirmación
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [eventoRegistrado, setEventoRegistrado] = useState(null);

  // Lista de eventos registrados
  const [eventos, setEventos] = useState([]);

  // Temporizador para ocultar confirmación
  useEffect(() => {
    if (mostrarConfirmacion) {
      const timer = setTimeout(() => {
        setMostrarConfirmacion(false);
        setEventoRegistrado(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [mostrarConfirmacion]);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valor = type === 'checkbox' ? checked : value;
    
    setFormulario(prev => ({
      ...prev,
      [name]: valor
    }));

    // Limpiar error del campo cuando el usuario escribe
    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar el formulario
  const validarFormulario = () => {
    const nuevosErrores = {
      titulo: '',
      fecha: '',
      categoria: '',
      descripcion: ''
    };

    let esValido = true;

    // Validar título (mínimo 5 caracteres)
    if (formulario.titulo.trim().length < 5) {
      nuevosErrores.titulo = 'El título debe tener al menos 5 caracteres';
      esValido = false;
    }

    // Validar fecha (no vacía y no pasada)
    if (!formulario.fecha) {
      nuevosErrores.fecha = 'La fecha es obligatoria';
      esValido = false;
    } else {
      const fechaSeleccionada = new Date(formulario.fecha);
      const fechaActual = new Date();
      fechaActual.setHours(0, 0, 0, 0);
      
      if (fechaSeleccionada < fechaActual) {
        nuevosErrores.fecha = 'La fecha no puede ser pasada';
        esValido = false;
      }
    }

    // Validar categoría
    if (!formulario.categoria) {
      nuevosErrores.categoria = 'Debes seleccionar una categoría';
      esValido = false;
    }

    // Validar descripción (mínimo 20 caracteres)
    if (formulario.descripcion.trim().length < 20) {
      nuevosErrores.descripcion = 'La descripción debe tener al menos 20 caracteres';
      esValido = false;
    }

    setErrores(nuevosErrores);
    return esValido;
  };

  // Verificar si el botón de envío debe estar deshabilitado
  const estaDeshabilitado = () => {
    return !formulario.titulo.trim() || 
           !formulario.fecha || 
           !formulario.categoria || 
           !formulario.descripcion.trim();
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      // Crear evento con ID único
      const nuevoEvento = {
        id: Date.now(),
        ...formulario
      };

      // Guardar evento en la lista
      setEventos(prev => [...prev, nuevoEvento]);

      // Mostrar confirmación
      setEventoRegistrado(nuevoEvento);
      setMostrarConfirmacion(true);

      // Limpiar formulario
      setFormulario({
        titulo: '',
        fecha: '',
        categoria: '',
        descripcion: '',
        esPublico: false
      });
    }
  };

  // Formatear fecha para mostrar
  const formatearFecha = (fecha) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', options);
  };

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
    titulo: {
      marginBottom: '20px',
      color: '#333'
    },
    grupo: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s'
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      boxSizing: 'border-box',
      backgroundColor: 'white'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      boxSizing: 'border-box',
      resize: 'vertical',
      minHeight: '100px',
      fontFamily: 'Arial, sans-serif'
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '20px'
    },
    checkboxInput: {
      width: '18px',
      height: '18px',
      cursor: 'pointer'
    },
    checkboxLabel: {
      cursor: 'pointer',
      fontSize: '16px'
    },
    confirmacion: {
      marginBottom: '20px'
    },
    listaEventos: {
      marginTop: '30px',
      borderTop: '2px solid #ddd',
      paddingTop: '20px'
    },
    evento: {
      backgroundColor: 'white',
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #e0e0e0'
    },
    eventoInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px'
    },
    eventoDetalles: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
      fontSize: '14px',
      color: '#666'
    },
    eventoPublico: {
      padding: '3px 10px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 'bold'
    },
    publico: {
      backgroundColor: '#d4edda',
      color: '#155724'
    },
    privado: {
      backgroundColor: '#f8d7da',
      color: '#721c24'
    }
  };

  return (
    <div style={estilos.contenedor}>
      <h2 style={estilos.titulo}>📝 Registrar Evento</h2>

      {/* Mensaje de confirmación */}
      {mostrarConfirmacion && eventoRegistrado && (
        <div style={estilos.confirmacion}>
          <Alerta tipo="exito" titulo="¡Evento registrado exitosamente!">
            <div>
              <p><strong>Título:</strong> {eventoRegistrado.titulo}</p>
              <p><strong>Fecha:</strong> {formatearFecha(eventoRegistrado.fecha)}</p>
              <p><strong>Categoría:</strong> {eventoRegistrado.categoria}</p>
              <p><strong>Descripción:</strong> {eventoRegistrado.descripcion}</p>
              <p><strong>Estado:</strong> {eventoRegistrado.esPublico ? 'Público' : 'Privado'}</p>
            </div>
          </Alerta>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Título */}
        <div style={estilos.grupo}>
          <label style={estilos.label}>Título *</label>
          <input
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            style={{
              ...estilos.input,
              borderColor: errores.titulo ? '#dc3545' : '#ddd'
            }}
            placeholder="Ingresa el título del evento"
          />
          {errores.titulo && (
            <Alerta tipo="error" titulo="Error de validación">
              <p>{errores.titulo}</p>
            </Alerta>
          )}
        </div>

        {/* Fecha */}
        <div style={estilos.grupo}>
          <label style={estilos.label}>Fecha *</label>
          <input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
            style={{
              ...estilos.input,
              borderColor: errores.fecha ? '#dc3545' : '#ddd'
            }}
          />
          {errores.fecha && (
            <Alerta tipo="error" titulo="Error de validación">
              <p>{errores.fecha}</p>
            </Alerta>
          )}
        </div>

        {/* Categoría */}
        <div style={estilos.grupo}>
          <label style={estilos.label}>Categoría *</label>
          <select
            name="categoria"
            value={formulario.categoria}
            onChange={handleChange}
            style={{
              ...estilos.select,
              borderColor: errores.categoria ? '#dc3545' : '#ddd'
            }}
          >
            <option value="">Selecciona una categoría</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
          {errores.categoria && (
            <Alerta tipo="error" titulo="Error de validación">
              <p>{errores.categoria}</p>
            </Alerta>
          )}
        </div>

        {/* Descripción */}
        <div style={estilos.grupo}>
          <label style={estilos.label}>Descripción *</label>
          <textarea
            name="descripcion"
            value={formulario.descripcion}
            onChange={handleChange}
            style={{
              ...estilos.textarea,
              borderColor: errores.descripcion ? '#dc3545' : '#ddd'
            }}
            placeholder="Describe el evento (mínimo 20 caracteres)"
          />
          {errores.descripcion && (
            <Alerta tipo="error" titulo="Error de validación">
              <p>{errores.descripcion}</p>
            </Alerta>
          )}
        </div>

        {/* Es público */}
        <div style={estilos.checkbox}>
          <input
            type="checkbox"
            name="esPublico"
            checked={formulario.esPublico}
            onChange={handleChange}
            style={estilos.checkboxInput}
          />
          <label style={estilos.checkboxLabel}>Evento público</label>
        </div>

        {/* Botón de envío */}
        <BotonAccion
          texto="Registrar Evento"
          variante="primario"
          disabled={estaDeshabilitado()}
          onClick={handleSubmit}
        />
      </form>

      {/* Lista de eventos registrados */}
      {eventos.length > 0 && (
        <div style={estilos.listaEventos}>
          <h3>📋 Eventos Registrados ({eventos.length})</h3>
          {eventos.map(evento => (
            <div key={evento.id} style={estilos.evento}>
              <div style={estilos.eventoInfo}>
                <div>
                  <strong>{evento.titulo}</strong>
                </div>
                <span style={{
                  ...estilos.eventoPublico,
                  ...(evento.esPublico ? estilos.publico : estilos.privado)
                }}>
                  {evento.esPublico ? 'Público' : 'Privado'}
                </span>
              </div>
              <div style={estilos.eventoDetalles}>
                <span>📅 {formatearFecha(evento.fecha)}</span>
                <span>📂 {evento.categoria}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormularioEvento;