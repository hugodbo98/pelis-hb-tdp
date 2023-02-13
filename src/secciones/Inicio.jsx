import React, { useState } from 'react'
import { users } from '../datos/data';
import { Link } from "react-router-dom";
import './Inicio.css';

export default function ConectarCuenta() {
  //***********Elementos para conectarse a una cuenta***************
  const[nick, setNick]= useState("");
  const[passw, setPassw]= useState("");
  
  const accionIngreso= (e) => {
    if((users.filter(u=>u.apodo===nick) && users.filter(u=>u.contras===passw)) != null){
      const usuarioOnline= users.filter(u=>u.apodo===nick);
      window.localStorage.setItem("estaConectado", true);
      window.localStorage.setItem("nombreOnline", usuarioOnline[0].nombre);
      window.localStorage.setItem("apellidoOnline", usuarioOnline[0].apellido);
    }
    <redirect to="/"/>
  }

  const accionSalida= () => {
    window.localStorage.removeItem("estaConectado");
    window.localStorage.removeItem("nombreOnline");
    window.localStorage.removeItem("apellidoOnline");
  }

  if(sessionStorage.getItem("pelisPorPag") == null){
    sessionStorage.setItem("pelisPorPag", 10);
  }

  return (
    <>
      <div className='ctn-inicioSup'>PelisHB</div>

      <div className='ctn-inicio'>
        
        {!(window.localStorage.getItem("estaConectado")) && (
          <div className='paraLogInOut'>
            <h2>Conectar Cuenta</h2>
            <form onSubmit={accionIngreso}>
              <h5>Usuario:</h5>
              <input 
                type="text" 
                required
                placeholder="Escribe tu nombre de usuario" 
                value={nick}
                onChange={(e)=>setNick(e.target.value)}
              />
              <h5>Contraseña:</h5>
              <input 
                type="password" 
                required
                placeholder="Escribe tu contraseña" 
                value={passw}
                onChange={(e)=>setPassw(e.target.value)}
              />
              <button>Ingresar</button>
            </form>
          </div>
        )}
      
        {(window.localStorage.getItem("estaConectado")) && (
          <div className='paraLogInOut'>
            <h1>Usuario conectado: </h1>
            <h4>{window.localStorage.getItem("nombreOnline")}</h4>
            <h4>{window.localStorage.getItem("apellidoOnline")}</h4>
            <Link to='/peliculas'>
              <button onClick={accionSalida}>Salir de la cuenta</button>
            </Link>
          </div>
        )}
        <div className='ctn-derInicio'>
          <div className='derSup'>
            <p>Presiona para continuar al sitio</p>
            <Link to='/peliculas'>
              <img src={require('../images/inicioArrowB4.png')} 
                className='inicioFlecha'
              />
            </Link>
          </div>
          <div className='derInf'>
            <p>Cantidad de peliculas por pagina</p>
            <select className='muestraPelisPorPag' id='opcSelected' 
            defaultValue={sessionStorage.getItem("pelisPorPag")} 
            onChange={(e)=>sessionStorage.setItem("pelisPorPag", e.target.value)}>
              <option value="5">5</option><option value="10">10</option>
              <option value="20">20</option><option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
