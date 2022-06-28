/* Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)*/

const productosLista = [ 'pan', 'leche', 'yerba', 'arroz', 'fideos'];
productosLista.push('aceite de girasol');

console.log(productosLista)
productosLista.pop();

console.log(productosLista)

const favMovies = [
    {
        titulo: 'topGun Maverick',
        director: 'Joseph Kosinski',
        fecha: new Date(2022,5,27),
    },
    {
        titulo: 'Mission: Impossible - Fallout',
        director: 'Christopher McQuarrie',
        fecha: new Date(2018,4,18),
    },
    {
        titulo: 'Mission: Impossible 2',
        director: 'John Woo',
        fecha: new Date(2000,0,13),
    }
]

const peliculasRecientes = favMovies.filter(peli => peli.fecha > new Date (2010,0,1))
console.log(peliculasRecientes);

/* - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)  */

const directores = favMovies.map(directores => directores.director )
console.log(directores)

const tituloPeliculas = favMovies.map(titulos => titulos.titulo )
console.log(tituloPeliculas)

const peliculasConcatenadas = directores.concat(tituloPeliculas);
console.log(peliculasConcatenadas)

const spreadPeliculas = [...directores, ...tituloPeliculas]
console.log(spreadPeliculas)