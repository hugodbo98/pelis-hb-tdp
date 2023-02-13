import React, {useEffect, useState} from 'react';
import './Pelicula.css';
import Paginacion from '../componentes/Paginacion';
import SeccionComentario from '../componentes/SeccionComentario'
import BarraSup from '../componentes/BarraSup';
import axios from 'axios';
import { datosMovie } from '../datos/data';

export default function Pelicula() {
  //************************************Obtener datos de la api*******************************************
  const[peliculas, setPeliculas]= useState([]);
  const[criticas, setCriticas]= useState([]);
  const[comentarios, setComentarios]= useState([]);
  const[cargando, setCargando]= useState(false);
  const[pagActual, setPagActual]= useState(1);

  useEffect(() => {
    const buscarDatos = async () => {
      setCargando(true);
      const res= await axios.get('http://movies.z4.tdplab.com/api/pelicula');
      setPeliculas(res.data);
      setCargando(false);
      const resC= await axios.get(`http://movies.z4.tdplab.com/api/critica/`);
      setCriticas(resC.data);
      const resCom= await axios.get(`http://movies.z4.tdplab.com/api/comentario/`);
      setComentarios(resCom.data);
    }
    buscarDatos();
  }, []);

  //Obtener las peliculas que se mostraran al usuario
  const indiceUltimaPeli= pagActual * sessionStorage.getItem("pelisPorPag");
  const indicePrimerPeli= indiceUltimaPeli - sessionStorage.getItem("pelisPorPag");
  const pelisMostradas= peliculas.slice(indicePrimerPeli, indiceUltimaPeli);

  //Cambiar pagina
  const cambiarPag = numPaginas => setPagActual(numPaginas);

  
  //**************************************PELICULA*****************************************************
  const[mostrarTab, setMostrarTab]= useState(1);
  const[idPelicula, setIdPelicula]= useState(0);
  const peliSeleccionada= peliculas.filter(p=>p.id==idPelicula);
  const criticaSeleccionada= criticas.filter(cr=>cr.pelicula==idPelicula);
  const comentarioSeleccionado= comentarios.filter(co=>co.pelicula==idPelicula);
  
  const manejarTab= (e, pel) => {
    setMostrarTab(e);
    setIdPelicula(pel);
  }

  if(cargando){
    return <h2>Cargando...</h2>
  }
  
  return (
    <>
      <BarraSup />
      <>
        {mostrarTab===1 && (
        <div className='ctn-principalPelicula'>
          <Paginacion 
            totalPelis={peliculas.length}
            cambiarPag={cambiarPag}
          />
          <ul className='ctn-listaPelicula'>
            {pelisMostradas.map(pelicula =>(
              <div onClick={()=>manejarTab(2, pelicula.id)} 
              key={pelicula.id} 
              className='ctn-pelicula'>
                <img src={require(`../images/${pelicula.id}.jpg`)} className='posterImg'/>
                <h2>{pelicula.titulo}</h2>
                <h5>Etiquetas: {pelicula.etiquetas.join(", ")}</h5>
              </div>
            ))}
          </ul>
        </div>
        )}
        {mostrarTab===2 && (
        <div className='ctn-tabPelicula' href='#'>
          <button onClick={()=>manejarTab(1)} className='btn-tabPelicula'>Volver</button>
          <div className='ctn-tabPeliSuperior'>
            <div className='reproductorPeli'>*Reproduccion de pelicula*</div>
            <div className='ctn-detalles'>
              <h1>{peliSeleccionada[0].titulo}</h1>
              <p className='sinopsis'>{datosMovie[idPelicula-1].descripcion}</p>
              <div className='ctn-critica'>
                {criticaSeleccionada.map(cr =>(
                  <div key={cr.id} className='critica'>
                    <p className='crit-mensaje'>"{cr.mensaje}"</p>
                    <p className='crit-calif'>Calificacion: {cr.calificacion}</p>
                    <p className='crit-usuario'>{cr.usuario.first_name} {cr.usuario.last_name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SeccionComentario 
            comentarioSeleccionado={comentarioSeleccionado}
          />
        </div>
        )}
      </>
    </>
  )
}