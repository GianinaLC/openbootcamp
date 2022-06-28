/* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */

const familia = new Set(['padre', 'madre', 'hermano', 'novio', 'yo'])
familia.add('yo')
console.log(familia)
familia.add('javascript')
console.log(familia)
