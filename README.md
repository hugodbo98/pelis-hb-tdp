# PelisHB 🎬 
Prueba de front-end para TDP S.A 

**Proyecto bootstrapped con [Create React App](https://github.com/facebook/create-react-app).**

## Ejecución🔧 
> Trabajar en Visual Studio Code

Pasos a seguir para la preparación y ejecución correcta de la web:
1. Clonar (o descargar) el repositorio.
2. Instalar (o tener instalado) Node Js
3. Utilizando Visual Studio Code, buscar y seleccionar la carpeta: ```pelis-tdptest```
4. Ejecutar el siguiente comando en la consola de VS Code: ```npm install``` (Puede tardar un par de minutos)
6. Iniciar la aplicacion ingresando el comando: ```npm start```

(Corre la aplicación en modo desarrollador
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.)

## Desplazarse en la aplicacion web ➡️ 
El sitio cuenta con tres diferentes pantallas
1. Inicio
2. Catálogo de películas
3. Reproducción de película

**Inicio**
Cuenta con tres elementos:
1. Contenedor de registro de cuenta
2. Boton de acceso al catálogo
3. Selector del muestreo del catálogo 

**Catalogo de peliculas**
Incluye la biblioteca de peliculas del sitio. Estas pueden ser presionadas para acceder a la reproducción.
El desplazamiento entre páginas está controlado por una fila superior de elementos numéricos.

**Reproducción de peliculas**
Esta sección muestra inicialmente al reproductor de películas, la descripción y las críticas. En la parte inferior se cuenta con una sección de comentarios. La capacidad de publicar y borrar está habilitada para usuarios conectados.

## Endpoints⚙️ 

| Endpoint                                                          | Descripción |
|---------------------------------------------------------------------|-------------|
| http://movies.z4.tdplab.com/api/pelicula/                                      | Devuelve la lista total de las peliculas, título y etiquetas |
| http://movies.z4.tdplab.com/api/comentario/                                      | Devuelve la lista total de comentarios |
| http://movies.z4.tdplab.com/api/critica/                                      | Devuelve la lista total de críticas |

>Los usuarios y otros elementos (imagenes y descripcion de peliculas) se encuentra en src/datos/data.jsx

## Usuarios👥
> user: candidatoTAHyfz
> password: passhvRYab

> user: candidatoLfrfZq
> password: passymrVXS

> user: candidatoASMmV
> password: passstrCGU

