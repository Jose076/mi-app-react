import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotasProvider } from './context/NotasContext';
import Layout from './Layout';
import Inicio from './pages/Inicio';
import Notas from './pages/Notas';
import NuevaNota from './pages/NuevaNotas';
import DetalleNota from './pages/DetalleNota';
import EditarNota from './pages/EditarNotas';
import NoEncontrada from './pages/NoEncontrada';

function Lab5() {
  return (
    <NotasProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="notas" element={<Notas />} />
          <Route path="notas/nueva" element={<NuevaNota />} />
          <Route path="notas/:id" element={<DetalleNota />} />
          <Route path="notas/:id/editar" element={<EditarNota />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </NotasProvider>
  );
}

export default Lab5;