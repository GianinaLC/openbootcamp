/* Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal */

/* eslint-disable*/ //desactiva todos
/* eslint-enable*/ //activa todos
/* eslint-disable-line*/ //desactiva todo en la linea 
/* eslint-disable-line quotes*/ //y puedo decirle tambien una en especifico
/* eslint-disable-next-line indent*/
/*//en el package.json  "lint-fix": "eslint --fix ." */  // el punto es para todos los archivos de la carpeta, sino coloco a que archivo ejm, index.js
//en terminal coloco npm run lint y me marca los errores, con npm run lin-fix me los arregla automaticamente

let nombre = "Gianina";

let apellido = "Carranzani";

let estudiante = nombre.concat(" ", apellido);

let saludo = `Hola ${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let numLetras = estudiante.length;

let primerLetra = nombre[0];

let ultimaLetra = apellido[apellido.length - 1];

let eliminarEspacios = estudiante.replace(" ", "");

let contiene = estudiante.includes(nombre);