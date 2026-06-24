import React from 'react';
import { useNotas } from './context/NotasContext';
import NotaIndividual from './NotaIndividual';

const ListaNotas = () => {
  const { notas, filtroCategoria, busqueda } = useNotas();

  // Filtrar notas por categoría
  const notasFiltradasCategoria = filtroCategoria === 'todas'
    ? notas
    : notas.filter(nota => nota.categoria === filtroCategoria);

  // Filtrar por búsqueda
  const notasFiltradas = notasFiltradasCategoria.filter(nota =>
    nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    nota.contenido.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Ordenar: fijadas primero
  const notasOrdenadas = [...notasFiltradas].sort((a, b) => {
    if (a.fijada && !b.fijada) return -1;
    if (!a.fijada && b.fijada) return 1;
    return 0;
  });

  return (
    <div>
      {notasOrdenadas.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '2px dashed #dee2e6'
        }}>
          <p style={{ margin: 0, color: '#6c757d' }}>
            📭 No hay notas que coincidan con los filtros
          </p>
        </div>
      ) : (
        notasOrdenadas.map(nota => (
          <NotaIndividual key={nota.id} nota={nota} />
        ))
      )}
    </div>
  );
};

export default ListaNotas;