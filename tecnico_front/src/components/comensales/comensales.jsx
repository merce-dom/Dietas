import React from 'react';
import RepNavBar from './rep_nav';
import './comensales.css'; // el CSS con el layout

export default function Comensales() {
  return (
    <>
      {/* Navbar superior */}
      <RepNavBar />

      {/* Contenedor general debajo de la barra */}
      <div className="content-container">
        {/* Parte A */}
        <div className="section-a">
          <h2>Zona A</h2>
          <p>Ejemplo: filtros, resumen, controles, etc.</p>
        </div>

        {/* Parte B */}
        <div className="section-b">
          <h2>Zona B</h2>
          <p>Ejemplo: tabla, formulario, gráficos...</p>
        </div>
      </div>
    </>
  );
}
