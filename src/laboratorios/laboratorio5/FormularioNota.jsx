import React, { useState, useEffect } from 'react';

const FormularioNota = ({ 
  notaInicial = null, 
  onSubmit, 
  onCancel, 
  botonTexto = 'Guardar Nota',
  tituloFormulario = 'Nueva Nota'
}) => {
  // Estados para los campos del formulario
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [categoria, setCategoria] = useState('personal');
  const [fijada, setFijada] = useState(false);
  
  // Estados para errores
  const [errores, setErrores] = useState({
    titulo: '',
    contenido: ''
  });

  // Estados para saber si los campos han sido tocados
  const [tocado, setTocado] = useState({
    titulo: false,
    contenido: false
  });

  // Precargar datos si estamos editando
  useEffect(() => {
    if (notaInicial) {
      setTitulo(notaInicial.titulo);
      setContenido(notaInicial.contenido);
      setCategoria(notaInicial.categoria);
      setFijada(notaInicial.fijada);
    }
  }, [notaInicial]);

  // Validar título
  const validarTitulo = (valor) => {
    if (valor.trim().length < 3) {
      return 'El título debe tener al menos 3 caracteres';
    }
    return '';
  };

  // Validar contenido
  const validarContenido = (valor) => {
    if (valor.trim().length < 10) {
      return 'El contenido debe tener al menos 10 caracteres';
    }
    return '';
  };

  // Manejadores de cambio con validación
  const handleTituloChange = (e) => {
    const valor = e.target.value;
    setTitulo(valor);
    if (tocado.titulo) {
      setErrores(prev => ({
        ...prev,
        titulo: validarTitulo(valor)
      }));
    }
  };

  const handleContenidoChange = (e) => {
    const valor = e.target.value;
    setContenido(valor);
    if (tocado.contenido) {
      setErrores(prev => ({
        ...prev,
        contenido: validarContenido(valor)
      }));
    }
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  const handleFijadaChange = (e) => {
    setFijada(e.target.checked);
  };

  // Manejadores de blur para validar al salir del campo
  const handleTituloBlur = () => {
    setTocado(prev => ({ ...prev, titulo: true }));
    setErrores(prev => ({
      ...prev,
      titulo: validarTitulo(titulo)
    }));
  };

  const handleContenidoBlur = () => {
    setTocado(prev => ({ ...prev, contenido: true }));
    setErrores(prev => ({
      ...prev,
      contenido: validarContenido(contenido)
    }));
  };

  // Verificar si el formulario es válido
  const esValido = () => {
    const errorTitulo = validarTitulo(titulo);
    const errorContenido = validarContenido(contenido);
    return errorTitulo === '' && errorContenido === '';
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Marcar todos los campos como tocados
    setTocado({ titulo: true, contenido: true });
    
    const errorTitulo = validarTitulo(titulo);
    const errorContenido = validarContenido(contenido);
    
    setErrores({
      titulo: errorTitulo,
      contenido: errorContenido
    });

    if (errorTitulo === '' && errorContenido === '') {
      onSubmit({
        titulo: titulo.trim(),
        contenido: contenido.trim(),
        categoria,
        fijada
      });
    }
  };

  return (
    <div>
      <h2 style={{
        fontSize: '24px',
        color: '#2c3e50',
        marginBottom: '20px'
      }}>
        {tituloFormulario}
      </h2>

      <form onSubmit={handleSubmit} style={{
        padding: '25px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #dee2e6',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        {/* Campo: Título */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#2c3e50'
          }}>
            Título *
          </label>
          <input
            type="text"
            value={titulo}
            onChange={handleTituloChange}
            onBlur={handleTituloBlur}
            placeholder="Escribe el título de la nota"
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '4px',
              border: `2px solid ${errores.titulo && tocado.titulo ? '#dc3545' : '#ced4da'}`,
              boxSizing: 'border-box',
              fontSize: '16px',
              transition: 'border-color 0.3s ease'
            }}
          />
          {errores.titulo && tocado.titulo && (
            <div style={{
              color: '#dc3545',
              fontSize: '13px',
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span>⚠️</span> {errores.titulo}
            </div>
          )}
        </div>

        {/* Campo: Contenido */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#2c3e50'
          }}>
            Contenido *
          </label>
          <textarea
            value={contenido}
            onChange={handleContenidoChange}
            onBlur={handleContenidoBlur}
            placeholder="Escribe el contenido de la nota"
            rows="6"
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '4px',
              border: `2px solid ${errores.contenido && tocado.contenido ? '#dc3545' : '#ced4da'}`,
              boxSizing: 'border-box',
              resize: 'vertical',
              fontSize: '16px',
              fontFamily: 'inherit',
              transition: 'border-color 0.3s ease'
            }}
          />
          {errores.contenido && tocado.contenido && (
            <div style={{
              color: '#dc3545',
              fontSize: '13px',
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span>⚠️</span> {errores.contenido}
            </div>
          )}
        </div>

        {/* Campo: Categoría */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#2c3e50'
          }}>
            Categoría
          </label>
          <select
            value={categoria}
            onChange={handleCategoriaChange}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '4px',
              border: '1px solid #ced4da',
              boxSizing: 'border-box',
              fontSize: '16px',
              backgroundColor: 'white'
            }}
          >
            <option value="personal">Personal</option>
            <option value="trabajo">Trabajo</option>
            <option value="estudio">Estudio</option>
            <option value="ideas">Ideas</option>
          </select>
        </div>

        {/* Campo: Fijada */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#2c3e50'
          }}>
            <input
              type="checkbox"
              checked={fijada}
              onChange={handleFijadaChange}
              style={{ marginRight: '10px', width: '18px', height: '18px' }}
            />
            📌 Fijar esta nota
          </label>
        </div>

        {/* Botones */}
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          <button
            type="submit"
            disabled={!esValido()}
            style={{
              padding: '10px 30px',
              backgroundColor: !esValido() ? '#6c757d' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: !esValido() ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              opacity: !esValido() ? 0.6 : 1
            }}
            onMouseEnter={(e) => {
              if (esValido()) {
                e.target.style.backgroundColor = '#218838';
              }
            }}
            onMouseLeave={(e) => {
              if (esValido()) {
                e.target.style.backgroundColor = '#28a745';
              }
            }}
          >
            ✅ {botonTexto}
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            style={{
              padding: '10px 30px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5a6268';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#6c757d';
            }}
          >
            ❌ Cancelar
          </button>
        </div>

        {/* Indicador de campos requeridos */}
        <div style={{
          marginTop: '15px',
          fontSize: '13px',
          color: '#6c757d'
        }}>
          * Campos obligatorios
        </div>
      </form>
    </div>
  );
};

export default FormularioNota;