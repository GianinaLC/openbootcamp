/* Crea los siguientes archivos JS:

- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break */

////for
/*
 let factorial = 1;

for (let i = 10 ; i > 0 ; i--){
    factorial *= i
}

console.log(factorial)
 */

////while
/* 
let factorial = 1;
let num = 10;

while( num > 1){
    factorial *= num
    num--
}

console.log(factorial)
 */


////break
let factorial = 1
let num = 10
while (true) {
    factorial *= num
    num--
    if (num === 1) break
}
console.log(factorial) // Factorial de 10 = 3628800


