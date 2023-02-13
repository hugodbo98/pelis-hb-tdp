import React, { useState } from 'react'
import FormularioComentario from './FormularioComentario';
import { Link } from "react-router-dom";
import './SeccionComentario.css'

export default function SeccionComentario({comentarioSeleccionado}) {
  const[coment, setComent]= useState(comentarioSeleccionado);
  const[seleccionado, setSeleccionado]= useState("Sin calificacion");

  const agregarComent= com => {
    if(com.mensaje.trim()){
      com.mensaje= com.mensaje.trim();
      const comentActualizados= [com, ...coment];
      setComent(comentActualizados);
    }
    console.log(coment);
  }
  const eliminarComent= id => {
    const comentActualizados= coment.filter(coment => coment.id !== id);
    setComent(comentActualizados);
  }

  const obtenerCalificacion= () => {
    setSeleccionado(document.getElementById('opcSelected').value);
  }

  return (
    <div className='ctn-seccionComentario'>
      <div className='ctn-conectate'>
        {!(window.localStorage.getItem("estaConectado")) && (
          <Link to='/'>
            <div className='btn-comentarioConect' style={{ textDecoration:'none'}}>Conecta con tu cuenta para enviar comentarios</div>
          </Link>
        )}
      </div>
      {(window.localStorage.getItem("estaConectado")) && (
      <div className='ctn-comentar'>
        <FormularioComentario 
          onSubmit={agregarComent}
          calif={seleccionado}
        />
        <select className='calificacionPeli' id='opcSelected' onChange={obtenerCalificacion}>
          <option value="Sin calificacion"></option>
          <option value="1">1</option><option value="2">2</option>
          <option value="3">3</option><option value="4">4</option>
          <option value="5">5</option><option value="6">6</option>
          <option value="7">7</option><option value="8">8</option>
          <option value="9">9</option><option value="10">10</option>
        </select>
      </div>
      )}

      {coment.map(co =>(
      <div key={co.id} className='ctn-comentarios'>
        <div className='mensaje-coment'>
          <p className='comUsu'><a>Usuario:</a> {co.usuario.first_name} {co.usuario.last_name}</p>
          <p className='comCali'><a>Calificacion:</a> {co.calificacion}</p>
          <p className='comMens'><a>Comentario:</a> {co.mensaje}</p>
        </div>
        
        {(window.localStorage.getItem("estaConectado")) && 
          (window.localStorage.getItem("apellidoOnline") === String(co.usuario.last_name)) &&
          (
          <div className='eliminar-coment' onClick={()=>eliminarComent(co.id)}>
            Eliminar
          </div>
        )}
      </div>
      ))} 
    </div>
  )
}
