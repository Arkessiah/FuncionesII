// Vamos a crear una función llamada multiplicaDosNumeros. Esta función se encargará de multiplicar DOS números diferentes entre sí y devolverá el resultado. Debe poder recibir por tanto, dos argumentos, a los que podemos llamar numA y numB, que representarán el primer y el segundo número utilizado.
function multiplicaDosNumeros(numA, numB){
  return numA * numB;
}


// Usando la función, crea una nueva variable primerMulti que sea igual al resultado de invocar la función con los números 4 y 5.
var primerMulti = multiplicaDosNumeros (4,5);

// Ahora crea una función llamada restaDos que reciba DOS argumentos, primerNum y segundoNum, y reste al primer número el segundo número enviado.
function restaDos(primerNum, segundoNum){
  return primerNum - segundoNum;
}

// Por último, crea una nueva variable resultadoFinal que sea igual al resultado de invocar la función restaDos con los números 50 y la variable primerMulti.

var resultadoFinal = restaDos(50, primerMulti);