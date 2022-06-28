/* Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript */

let alturaCentimetros = 166;
let alturaMetros = 1.66;
let peso = 66.3;

let alturaRedondeadaUp = Math.ceil(alturaMetros);
let pesoRedondeadoDown = Math.floor(peso);

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE

console.log(alturaRedondeadaUp)
console.log(pesoRedondeadoDown)
console.log(sonIguales)