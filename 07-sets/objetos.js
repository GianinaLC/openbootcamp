/* Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */

const datos = {
    nombre: 'Gianina',
    apellido: 'Carranzani',
    edad: 28,
    altura: 166,
    eresDesarrollador: true
};

const edad = datos.edad;
const lista = [
    {
        ...datos
    },
    {
        nombre: 'Matias',
        apellido: 'S',
        edad: 32,
        altura: 183,
        eresDesarrollador: true
    },
    {
        nombre: 'Diego',
        apellido: 'C',
        edad: 36,
        altura: 173,
        eresDesarrollador: false
    }
];

const listaEdadOrdenada = lista.sort((a, b) => b.edad - a.edad )
console.log(listaEdadOrdenada)