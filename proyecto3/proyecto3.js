// Ejercicio 1:
// Escriba un programa que reciba y genere una matriz del tamaño de la entrada y que
// contenga una X representada por medio de ‘x’.
// Ej: Si se ingresa el número 6:


function dibujarX(distancia) {
  let lineas = []
  for (let i = 0; i < distancia; i++) {
    let fila = []
    for (let j = 0; j < distancia; j++) {
      if (i == j) {
        fila.push("x")
      } else if (j + 1 == distancia - i) {
        fila.push("x")
      } else {
        fila.push(0)
      }
    }
    lineas.push(fila)
  }
  return lineas
}
console.table(dibujarX(8))


// Ejercicio 2:
// Escriba un programa que reciba dos arreglos con elementos y verifique si ambos
// arreglos contienen los mismos elementos. Si ambos arreglos contienen lo mismo
// imprima: ‘Los arreglos son iguales’ o si no, imprima los elementos diferentes entre
// los dos arreglos.

function validacionArreglos(arreglo1, arreglo2) {
  if (arreglo1.length === arreglo2.length) {
    for (i = 0; i < arreglo1.length; i++) {
      if (arreglo1[i] !== arreglo2[i])
        return 'los elementos son diferentes entre los dos arreglos'
    }
    return 'Los arreglos son iguales'
  } else {
    return 'los arreglos no cuentan con la misma cantidad de elementos'
  }
}
console.log(validacionArreglos([7, 3, 3, 5, 9, "ignacio"], [7, 3, 3, 5, 9, "nacho"]))


