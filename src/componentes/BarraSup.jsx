import React from 'react';
import './BarraSup.css'
import { Link } from "react-router-dom";

export default function BarraSup() {
  const accionSalida= () => {
    window.localStorage.removeItem("estaConectado");
    window.localStorage.removeItem("nombreOnline");
    window.localStorage.removeItem("apellidoOnline");
    window.location.reload();
  }
  return (
    <div className='ctn-barraSup'>
      <div className='links-barraSup'>
        <Link to= '/' style={{ textDecoration:'none'}}><a>Pantalla Inicial</a></Link>
      </div>
      <div className='logo-barraSup'>
        PelisHB
      </div>
      {(window.localStorage.getItem("estaConectado")) && 
        <div className='der-barraSup'>
          <div className='status-barraSup'>
            <p>Conectado</p>
            {window.localStorage.getItem("nombreOnline")}
            {window.localStorage.getItem("apellidoOnline")}
          </div>
          <div className='salir-barraSup'>
            <p onClick={accionSalida}>(Salir)</p>
          </div>
        </div>
      }
      {!(window.localStorage.getItem("estaConectado")) && 
        <div className='der-barraSup'></div>
      }
    </div>
  )
}
