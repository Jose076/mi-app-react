import React, { useState, useEffect } from 'react';

function TemporizadorPomodoro() {
  // Estado inicial: 25 minutos = 1500 segundos
  const [tiempoRestante, setTiempoRestante] = useState(1500);
  const [estaActivo, setEstaActivo] = useState(false);
  const [tiempoInicial] = useState(1500); // Guardamos el tiempo inicial para reiniciar

  // Efecto para manejar el intervalo
  useEffect(() => {
    let intervalo = null;

    // Solo ejecutar el intervalo si el temporizador está activo
    if (estaActivo && tiempoRestante > 0) {
      intervalo = setInterval(() => {
        setTiempoRestante(prevTiempo => {
          const nuevoTiempo = prevTiempo - 1;
          // Si el tiempo llega a 0, detener el temporizador y mostrar alerta
          if (nuevoTiempo === 0) {
            setEstaActivo(false);
            alert('¡Tiempo completado! 🎉');
            return 0;
          }
          return nuevoTiempo;
        });
      }, 1000); // Decrementa cada segundo
    }

    // Función de limpieza: eliminar el intervalo cuando:
    // - El componente se desmonta
    // - El temporizador se pausa (estaActivo cambia a false)
    // - El tiempo llega a 0
    return () => {
      if (intervalo) {
        clearInterval(intervalo);
      }
    };
  }, [estaActivo, tiempoRestante]); // Dependencias: se ejecuta cuando cambian estos valores

  // Función para formatear el tiempo en MM:SS
  const formatearTiempo = (segundos) => {
    // Validar que el tiempo no sea negativo
    const segundosValidos = Math.max(0, segundos);
    const minutos = Math.floor(segundosValidos / 60);
    const segs = segundosValidos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segs).padStart(2, '0')}`;
  };

  // Función para iniciar el temporizador
  const iniciar = () => {
    if (tiempoRestante > 0) {
      setEstaActivo(true);
    }
  };

  // Función para pausar el temporizador
  const pausar = () => {
    setEstaActivo(false);
  };

  // Función para reiniciar el temporizador
  const reiniciar = () => {
    setEstaActivo(false);
    setTiempoRestante(tiempoInicial);
  };

  // Función para detener el temporizador manualmente (cuando llega a 0)
  // No es necesario porque ya se detiene automáticamente

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <h2>Temporizador Pomodoro</h2>
      
      {/* Mostrar el tiempo restante */}
      <div style={{ 
        fontSize: '48px', 
        fontWeight: 'bold',
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      }}>
        {formatearTiempo(tiempoRestante)}
      </div>

      {/* Indicador de estado */}
      <div style={{ marginBottom: '15px' }}>
        <span style={{ 
          padding: '4px 12px', 
          borderRadius: '4px',
          backgroundColor: estaActivo ? '#51cf66' : '#ffd43b',
          color: estaActivo ? 'white' : '#333'
        }}>
          {estaActivo ? '▶ En ejecución' : tiempoRestante === 0 ? '⏹ Completado' : '⏸ Pausado'}
        </span>
      </div>

      {/* Botones de control */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={iniciar}
          disabled={estaActivo || tiempoRestante === 0}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#51cf66',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: (estaActivo || tiempoRestante === 0) ? 'not-allowed' : 'pointer',
            opacity: (estaActivo || tiempoRestante === 0) ? 0.5 : 1
          }}
        >
          Iniciar
        </button>
        
        <button 
          onClick={pausar}
          disabled={!estaActivo}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#ffd43b',
            color: '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: !estaActivo ? 'not-allowed' : 'pointer',
            opacity: !estaActivo ? 0.5 : 1
          }}
        >
          Pausar
        </button>
        
        <button 
          onClick={reiniciar}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reiniciar
        </button>
      </div>

      {/* Mensaje cuando el tiempo llega a 0 */}
      {tiempoRestante === 0 && (
        <div style={{ 
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#ff6b6b',
          color: 'white',
          borderRadius: '4px'
        }}>
          ⏰ ¡Tiempo completado! 🎉
        </div>
      )}
    </div>
  );
}

export default TemporizadorPomodoro;