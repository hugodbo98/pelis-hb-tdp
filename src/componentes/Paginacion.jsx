import React from 'react';
import './Paginacion.css';

export default function Paginacion({totalPelis, cambiarPag}) {
  const numPaginas= [];

  for(let i=1; i<=Math.ceil(totalPelis/sessionStorage.getItem("pelisPorPag")); i++){
    numPaginas.push(i);
  }

  return (
    <nav>
      <ul className='ctn-paginacion'>
        {numPaginas.map(num => (
          <li key={num} className='itemPag'>
            <button onClick={() => cambiarPag(num)} className='linkPag'>
              {num}
            </button>
          </li>
        ))}
      </ul>
      
    </nav>
  )
}
