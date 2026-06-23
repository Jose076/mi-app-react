import React from "react";
import Alerta from "./Alerta.jsx";
import Acordeon from "./Acordeon.jsx";
import Modal from "./Modal.jsx";
import BotonAccion from "./BotonAccion.jsx";
import Contador from "./Contador.jsx";
import ListaContactos from "./ListaContactos.jsx";
import FormularioEvento from "./FormularioEvento.jsx";

function Lab3() {
  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.tituloPrincipal}>📚 Laboratorio 3 - Componentes Reutilizables</h1>
      
      {/* Ejercicio 1: Alertas y Acordeones */}
      <Acordeon titulo="📌 Ejercicio 1 - Componentes Reutilizables con Props y Children" expandidoPorDefecto={true}>
        <div style={estilos.seccion}>
          <h3 style={estilos.subtitulo}>Alertas</h3>
          <Alerta tipo="exito" titulo="¡Operación exitosa!">
            <p>La transacción se ha completado correctamente. Los datos han sido guardados en la base de datos.</p>
            <small>ID de transacción: #12345</small>
          </Alerta>

          <Alerta tipo="advertencia" titulo="Advertencia de seguridad">
            <p>Tu contraseña expirará en 3 días. Por favor, actualízala para mantener la seguridad de tu cuenta.</p>
          </Alerta>

          <Alerta tipo="error" titulo="Error de conexión">
            <p>No se pudo establecer conexión con el servidor. Verifica tu conexión a internet e intenta nuevamente.</p>
            <p>Código de error: ERR_CONNECTION_REFUSED</p>
          </Alerta>

          <Alerta tipo="info" titulo="Información importante">
            <p>El sistema realizará un mantenimiento programado el próximo domingo de 02:00 a 04:00 AM.</p>
            <ul>
              <li>El servicio estará fuera de línea durante el mantenimiento</li>
              <li>Se recomienda guardar tu trabajo antes de ese horario</li>
            </ul>
          </Alerta>

          <h3 style={estilos.subtitulo}>Acordeones Anidados</h3>
          <Acordeon titulo="📚 ¿Qué es React?">
            <p>React es una biblioteca JavaScript para construir interfaces de usuario declarativas y basadas en componentes.</p>
            <p><strong>Características principales:</strong></p>
            <ul>
              <li>Componentes reutilizables</li>
              <li>Virtual DOM para rendimiento</li>
              <li>JSX para sintaxis declarativa</li>
              <li>Gestión de estado con hooks</li>
            </ul>
          </Acordeon>

          <Acordeon titulo="💻 Hooks en React">
            <p>Los Hooks permiten usar estado y otras características de React sin escribir clases.</p>
            <p><strong>Hooks más comunes:</strong></p>
            <ul>
              <li><code>useState</code> - para manejar estado local</li>
              <li><code>useEffect</code> - para efectos secundarios</li>
              <li><code>useContext</code> - para contexto</li>
              <li><code>useReducer</code> - para estado complejo</li>
            </ul>
          </Acordeon>

          <Acordeon titulo="🎯 Props vs State">
            <p><strong>Props:</strong> Datos que se pasan de un componente padre a un componente hijo. Son de solo lectura.</p>
            <p><strong>State:</strong> Datos internos del componente que pueden cambiar a lo largo del tiempo.</p>
          </Acordeon>
        </div>
      </Acordeon>

      {/* Ejercicio 2: Composición, Estado y Eventos */}
      <Acordeon titulo="🎮 Ejercicio 2 - Composición, Estado y Eventos" expandidoPorDefecto={false}>
        <div style={estilos.seccion}>
          <h3 style={estilos.subtitulo}>Contador</h3>
          <Contador />
          
          <h3 style={estilos.subtitulo}>Modal</h3>
          <Modal />
          
          <h3 style={estilos.subtitulo}>Botones de Acción</h3>
          <div style={estilos.botonesContainer}>
            <BotonAccion texto="Primario" variante="primario" />
            <BotonAccion texto="Secundario" variante="secundario" />
            <BotonAccion texto="Peligro" variante="peligro" />
            <BotonAccion texto="Deshabilitado" variante="primario" disabled={true} />
          </div>
        </div>
      </Acordeon>

      {/* Ejercicio 3: Lista Dinámica con Inmutabilidad */}
      <Acordeon titulo="👥 Ejercicio 3 - Lista Dinámica con Inmutabilidad" expandidoPorDefecto={false}>
        <div style={estilos.seccion}>
          <ListaContactos />
        </div>
      </Acordeon>

      {/* Ejercicio 4: Formulario Controlado con Validación */}
      <Acordeon titulo="📝 Ejercicio 4 - Formulario Controlado con Validación" expandidoPorDefecto={false}>
        <div style={estilos.seccion}>
          <FormularioEvento />
        </div>
      </Acordeon>
    </div>
  );
}

// Estilos globales
const estilos = {
  contenedor: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh'
  },
  tituloPrincipal: {
    color: '#1a1a2e',
    textAlign: 'center',
    padding: '30px 0',
    borderBottom: '4px solid #007bff',
    marginBottom: '30px',
    fontSize: '32px',
    fontWeight: '700',
    letterSpacing: '1px'
  },
  seccion: {
    padding: '10px 0'
  },
  subtitulo: {
    color: '#2c3e50',
    marginTop: '20px',
    marginBottom: '15px',
    fontSize: '20px',
    borderLeft: '4px solid #007bff',
    paddingLeft: '12px'
  },
  botonesContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    padding: '10px 0'
  }
};

export default Lab3;