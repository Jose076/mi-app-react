import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../FormularioNota';

const NuevaNota = () => {
  const navigate = useNavigate();
  const { agregarNota } = useNotas();

  const handleSubmit = (datosNota) => {
    agregarNota(datosNota);
    navigate('/notas');
  };

  const handleCancel = () => {
    navigate('/notas');
  };

  return (
    <FormularioNota
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      botonTexto="Crear Nota"
      titulo="➕ Crear Nueva Nota"
    />
  );
};

export default NuevaNota;