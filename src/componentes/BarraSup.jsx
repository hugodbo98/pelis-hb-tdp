import React from 'react';
import './BarraSup.css'
import { Link } from "react-router-dom";

export default function BarraSup() {
  return (
    <div className='ctn-barraSup'>
      <div className='links-barraSup'>
        <Link to= '/' style={{ textDecoration:'none'}}>Inicio</Link>
      </div>
      <div className='logo-barraSup'>
        PelisHB
      </div>
      {(window.localStorage.getItem("estaConectado")) && 
        <div className='status-barraSup'>
          <p>Conectado</p>
          {window.localStorage.getItem("nombreOnline")}
          {window.localStorage.getItem("apellidoOnline")}
        </div>
      }
      {!(window.localStorage.getItem("estaConectado")) && 
        <div className='status-barraSup'></div>
      }
    </div>
  )
}