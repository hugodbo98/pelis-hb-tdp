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

  function resetForm(){
    document.getElementById('formComent').reset();
  }

  return (
    <form onSubmit={manejarEnvio} id='formComent' className='form-Comentario'>
      <input 
        className='input-Comentario'
        type="text" 
        placeholder='Escribe un comentario'
        name='mensaje'
        onChange={manejarCambio}
        maxLength="70"
      />
      <button className='btn-Comentario' onClick={resetForm}>
        Enviar
      </button>
    </form>
  )
}
