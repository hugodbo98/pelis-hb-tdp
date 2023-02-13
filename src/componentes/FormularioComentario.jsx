import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid';
import './FormularioComentario.css'

export default function FormularioComentario({onSubmit, calif}) {
  const[input, setInput]= useState('');
  const usuario= {
    first_name: window.localStorage.getItem("nombreOnline"),
    last_name: window.localStorage.getItem("apellidoOnline")
  }
  const manejarCambio = e => {
    setInput(e.target.value);
  }
  const manejarEnvio = e => {
    e.preventDefault();
    
    const comentNuevo = {
      id: uuidv4(),
      mensaje: input,
      usuario: usuario,
      calificacion: calif
    }
    onSubmit(comentNuevo);
  }

  return (
    <form onSubmit={manejarEnvio} className='form-Comentario'>
      <input 
        className='input-Comentario'
        type="text" 
        placeholder='Escribe un comentario'
        name='mensaje'
        onChange={manejarCambio}
        maxlength="70"
      />
      <button className='btn-Comentario'>
        Enviar
      </button>
    </form>
  )
}
