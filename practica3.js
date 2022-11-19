// Ejercicio 1:
// Escriba un programa que calcule el factorial de un número de manera recursiva.

function factorializador(numero) {
  if (numero < 0)
    return -1;
  if (numero == 0)
    return 1;
  else {
    return (numero * factorializador(numero - 1));
  }
}
console.log(factorializador(5))

// Ejercicio 2:
// Un año es bisiesto si es divisible entre 4 pero no entre 100, excepto si es divisible entre
// 400. Por ejemplo, 1996 es bisiesto (divisible entre 4), 1900 no lo es (divisible entre 100)
// y 2000 sí lo es (divisible entre 400).
// Escriba un programa que solicite al usuario un año y le indique si es bisiesto o no.

function anoBisiesto(ano) {
  if (ano % 4 == 0 && ano % 100 != 0) {
    console.log("si es bisiesto")
  } else if (ano % 400 == 0) {
    console.log("si es bisiesto")
  } else {
    console.log("no es bisiesto")
  }
}
anoBisiesto(1600)

// Ejercicio 3:
// Escriba un programa que solicite al usuario un texto y un carácter y le indique al
// usuario cuántas veces aparece en el texto ese carácter.



function cuantosRepetidos(texto, elemento) {
  let contador = 0;
  console.log("el elemento es", elemento)
  console.log("el texto es", texto)
  let item = texto.split("")
  console.log(item)
  for (i = 0; i < item.length; i++) {
    if (elemento === item[i]) {
      contador++;
    }
  }
  return contador;
}

console.log('Se repite:' + cuantosRepetidos("elefante gigante elegante", "e"))

// Ejercicio 4:
// Escriba un programa que le solicite al usuario adivinar un número “secreto” del 1 al
// 100. El programa debe continuar preguntando por nuevos números al usuario hasta
// que lo adivine o ingrese un cero para salir. El programa debe indicar, cada vez que el
// usuario falle, si el número ingresado es mayor o menor que el número a adivinar.

function adivinarNumero() {
  let adivinar = 25
  adivinar = parseInt(adivinar)

  while (true) {
    let adivinador = prompt("Coloca el numero que crees que sea")

    if (adivinador == adivinar) {
      alert("Ganaste!!")
      break
    }
    else if (adivinador == 0) {
      break
    }
    else if (adivinador < adivinar) {
      alert("El numero debe ser mayor")
    }
    else if (adivinador > adivinar) {

      alert("El numero debe de ser menor")
    }
  }
}
adivinarNumero()

// Ejercicio 5:
// Escriba un programa que solicite un texto y lo imprima en la consola con todos los
// espacios en blanco removidos. Por ejemplo, si el usuario introduce “May the force be
// with you”, el programa debe retornar “Maytheforcebewithyou”.

const texto = "Ignacio Marin Garro"
let sinEspacios = ""
sinEspacios = texto.split(" ").join("")
console.log(sinEspacios)