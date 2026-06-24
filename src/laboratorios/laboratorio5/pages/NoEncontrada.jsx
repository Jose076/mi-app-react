import React from 'react';
import { Link } from 'react-router-dom';

const NoEncontrada = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ fontSize: '80px', marginBottom: '20px' }}>🔍</div>
      <h1 style={{
        fontSize: '48px',
        fontWeight: '800',
        color: '#2c3e50',
        margin: '0 0 10px 0'
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '24px',
        color: '#6c757d',
        margin: '0 0 20px 0'
      }}>
        Página no encontrada
      </h2>
      <p style={{
        fontSize: '16px',
        color: '#6c757d',
        marginBottom: '30px',
        maxWidth: '400px'
      }}>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link
        to="/"
        style={{
          padding: '12px 30px',
          backgroundColor: '#3498db',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#2980b9';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#3498db';
          e.target.style.transform = 'scale(1)';
        }}
      >
        🏠 Volver al Inicio
      </Link>
    </div>
  );
};

export default NoEncontrada;