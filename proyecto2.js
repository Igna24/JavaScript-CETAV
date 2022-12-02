// Escriba un programa que imprima, utilizando ciclos, un cuadrado de 10x10
// caracteres, formado por 2 triángulos, uno con el carácter '#' y el otro con el carácter '*':

let x = 10

function cuadrado() {
  for (let i = 1; i <= x; ++i) {
    let resultado = ''
    for (let j = 10; j > i; --j) {
      resultado += '* '
    }
    for (let x = 1; x <= i; ++x) {
      resultado += '# '
    }
    console.log(resultado)
  }
}
cuadrado()

// Ejercicio 2:
// Escriba una función que calcule el valor de un número N elevado por otro número
// M. (La función debe de recibir ambos parámetros).

function potencia(numero, elevado) {
  resultado = Math.pow(numero, elevado)
  return resultado
}
console.log("el resultado es :", potencia(2, 4))

// Ejercicio 3:
// Escriba una función que resuelve el problema del ejercicio anterior de manera
// recursiva.

function potenciaRecursiva(numero2, elevado2) {
  if (elevado2 == 0) {
    return 1
  } else {
    return numero2 * potenciaRecursiva(numero2, elevado2 - 1)
  }
}
console.log("el resultado con operacion recursiva es:", potenciaRecursiva(2, 4))

// Ejercicio 4:
// Escriba una función recursiva que reciba un arreglo y calcule la suma de sus
// elementos.


function sumaRecursiva(elementos) {
  if (elementos.length == 1) {
    return elementos[0]
  } else {
    let ultimoItem = elementos[elementos.length - 1]
    elementos.splice(elementos.length-1, 1)
    return ultimoItem + sumaRecursiva(elementos)

    // return elementos.pop() + sumaRecursiva(elementos)
  }
}

console.log("la suma es", sumaRecursiva([3, 4, 5, 6, 7]))



